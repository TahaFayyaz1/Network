from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.urls import reverse
from .forms import PostForm, FollowingForm
from .models import User, Post, Following
from django.utils import timezone
from django.contrib.auth.decorators import login_required


def index(request):
    if request.method == "POST":
        newpost_form = PostForm(request.POST)
        if newpost_form.is_valid():
            description = newpost_form.cleaned_data["description"]
            post = Post(
                user=request.user,
                description=description,
                post_datetime=timezone.now(),
            )
            post.save()

    posts = Post.objects.all().order_by("-id")

    return render(
        request,
        "network/index.html",
        {"newpost_form": PostForm(), "posts": posts},
    )


def user(request, userid):
    user = User.objects.get(username=userid)
    posts = Post.objects.filter(user=user.id).order_by("-id")
    num_of_followers = len(Following.objects.filter(following=user, follow=True))
    num_of_following = len(Following.objects.filter(user=user, follow=True))

    try:
        does_user_follow = Following.objects.get(
            user=request.user, following=user
        ).follow
    except Following.DoesNotExist:
        does_user_follow = False
        f = Following(user=request.user, following=user)
        f.save()

    if request.method == "POST":
        following_form = FollowingForm(request.POST)
        if following_form.is_valid():
            f = Following.objects.get(user=request.user, following=user)
            if f.follow == True:
                f.follow = False
            else:
                f.follow = True
            f.save()
        return HttpResponseRedirect(reverse("user", args=[userid]))

    return render(
        request,
        "network/user.html",
        {
            "user": user,
            "num_of_followers": num_of_followers,
            "num_of_following": num_of_following,
            "posts": posts,
            "following_form": FollowingForm(),
            "does_user_follow": does_user_follow,
        },
    )


def login_view(request):
    if request.method == "POST":

        # Attempt to sign user in
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        # Check if authentication successful
        if user is not None:
            login(request, user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(
                request,
                "network/login.html",
                {"message": "Invalid username and/or password."},
            )
    else:
        return render(request, "network/login.html")


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))


def register(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(
                request, "network/register.html", {"message": "Passwords must match."}
            )

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
        except IntegrityError:
            return render(
                request, "network/register.html", {"message": "Username already taken."}
            )
        login(request, user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "network/register.html")
