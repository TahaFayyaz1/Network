from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    post_datetime = models.DateTimeField()


class Likes(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = ["user", "post"]


class Following(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="following"
    )
    follow = models.BooleanField(default=False)

    class Meta:
        unique_together = ["user", "following"]
