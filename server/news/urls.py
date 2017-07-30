from django.conf.urls import url
from news.views import articles

urlpatterns = [

    url(r'articles/$', articles)

]
