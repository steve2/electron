from django.db import models
from news.models import Article
from news.serializers import ArticleSerializer

class ArticleManager(models.Manager):

    @staticmethod
    def List(serialize=True):
        articles = Article.objects.all().order_by('-dateCreated')
        if serialize:
            serialized = ArticleSerializer(articles, many=True)
            return serialized.data
        else:
            return articles

    @staticmethod
    def Find(id, serialize=True):
        try:
            article = Article.objects.get(id=id)
        except:
            return (False, None)
        if serialize:
            serialized = ArticleSerializer(article)
            return (True, serialize)
        else:
            return (True, article)