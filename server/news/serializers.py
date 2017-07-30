from rest_framework import serializers
from auth2.serializers import UserSerializer
from news.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    author = UserSerializer()

    class Meta:
        model = Article
        fields = ('id', 'title', 'subtitle', 'author', 'text', 'links', 'dateCreated', 'lastModified')
