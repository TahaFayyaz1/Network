from django import forms
from .models import Post, Following


class PostForm(forms.ModelForm):
    description = forms.CharField(
        widget=forms.Textarea(
            attrs={"class": "form-control ml-3 mr-3", "placeholder": "Add Post..."}
        ),
        label="",
    )

    class Meta:
        model = Post
        fields = ["description"]


class FollowingForm(forms.ModelForm):
    class Meta:
        model = Following
        fields = []
