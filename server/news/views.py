from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from news.managers import ArticleManager

# Create your views here.

@api_view(['GET'])
def articles(request):
    if request.method == 'GET':
        return Response(ArticleManager.List(), status=status.HTTP_200_OK)