from django.shortcuts import render

def index(request):
    """
    Return the base index.html to pull client application dependencies.
    """
    return render(request, 'index.html')
