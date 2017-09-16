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
            return None
        if serialize:
            serialized = ArticleSerializer(article)
            return serialized.data
        else:
            return article

    @staticmethod
    def Create(author, data):
        serialized = ArticleSerializer(data=data, partial=True)
        if serialized.is_valid():
            instance = serialized.save(author)
            if instance:
                serialized = ArticleSerializer(instance)
                return (True, serialized.data)
        return (False, serialized.errors,)

    @staticmethod
    def Update(id, data, serialize=True):
        article = ArticleManager.Find(id, False)
        if article is not None:
            serialized = ArticleSerializer(article, data=data, partial=True)
            if serialized.is_valid():
                instance = serialized.save()
                if instance:
                    if serialize:
                        return serialized.data
                    else:
                        return instance
        return None

    @staticmethod
    def Delete(ids):
        return Article.objects.filter(pk__in=ids).delete()
