from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.contrib.auth import authenticate, login, logout

from auth2.serializers import UserSerializer

@api_view(['GET'])
def current(request):
    """
    Returns the current user session.

    """
    if request.user.is_authenticated:
        serialized = UserSerializer(request.user)
        return Response(serialized.data, status=status.HTTP_200_OK)
    else:
        return Response(None, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def signin(request):
    """
    Registers a user session.

    """
    username = request.data['username']
    password = request.data['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        serialized = UserSerializer(user)
        return Response(serialized.data, status=status.HTTP_200_OK)
    else:
        return Response(None, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signout(request):
    """
    Unregisters a user session.

    """
    if request.user.is_authenticated:
        logout(request)
        return Response(None, status=status.HTTP_200_OK)
    else:
        return Response(None, status=status.HTTP_400_BAD_REQUEST)