from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("login", views.login_view, name="login"),
    path("logout", views.logout_view, name="logout"),
    path("register", views.register, name="register"),
    path("following", views.following, name="following"),
    path("likes/<int:postid>", views.likes, name="likes"),
    path("edit/<int:postid>", views.edit_post, name="editpost"),
    path("<str:userid>", views.user, name="user"),
]
