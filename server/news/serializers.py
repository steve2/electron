from rest_framework import serializers
from rest_framework.exceptions import PermissionDenied

from auth2.serializers import UserSerializer
from django.contrib.auth.models import User
from auth2.managers import UsersManager
from news.models import Article

class ArticleSerializer(serializers.ModelSerializer):

    author = UserSerializer(required=False, read_only=True)

    class Meta:
        model = Article
        fields = ('id', 'title', 'subtitle', 'author', 'text', 'links', 'dateCreated', 'lastModified', 'deleted')

    def save(self, author=None):
        if author is not None:
            self.validated_data['author'] = author
        return super().save()