"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf.urls import include
from django.conf.urls.static import static
from django.contrib import admin

from server import settings
from server.views import index

from auth2.views import login
from auth2.views import logout

urlpatterns = [

    # Serve adminsitrator views.
    url(r'^admin/', admin.site.urls),

    # REST API.
    url(r'^api/news/', include('news.urls')),
    url(r'^api/auth/', include('auth2.urls')),

    # Serve `index.html`.
    url(r'^.*$', index)

] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
