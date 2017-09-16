from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from auth2.serializers import UserSerializer

class UsersManager(models.Manager):

    @staticmethod
    def Find(id, serialize=True):
        try:
            user = User.objects.get(id=id)
        except:
            return None
        if serialize:
            serialized = UserSerializer(user)
            return serialized.data
        else:
            return user
