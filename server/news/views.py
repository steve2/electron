from django.contrib.auth.decorators import login_required
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from news.managers import ArticleManager

@login_required
@api_view(['GET', 'POST', 'DELETE',])
def articles(request):
    """
    Multiple article requests.

    """
    if not request.user.is_authenticated and request.method == 'POST':
        return Response(None, status=status.HTTP_403_FORBIDDEN)

    if request.method == 'GET':
        return Response(ArticleManager.List(), status=status.HTTP_200_OK)

    if request.method == 'POST':
        success, article = ArticleManager.Create(request.user, request.data)
        if success:
            return Response(article, status=status.HTTP_200_OK)
        else:
            return Response(article, status=status.HTTP_400_BAD_REQUEST)

    if request.method == 'DELETE':
        deleted = ArticleManager.Delete(request.data)
        if deleted == 0:
            return Response(None, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(None, status=status.HTTP_200_OK)

@login_required
@api_view(['GET', 'POST', 'DELETE',])
def article(request, articleid):
    """
    Single article requests.

    """
    if request.method == 'GET':
        article = ArticleManager.Find(articleid)
        if article is None:
            return Response(None, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(article, status=status.HTTP_200_OK)

    if request.method == 'POST':
        article = ArticleManager.Update(articleid, request.data)
        if article is None:
            return Response(None, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(article, status=status.HTTP_200_OK)

    if request.method == 'DELETE':
        deleted = ArticleManager.Delete([articleid])
        if deleted == 0:
            return Response(None, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response(None, status=status.HTTP_200_OK)
