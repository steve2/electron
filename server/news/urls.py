from django.conf.urls import url

from news.views import articles
from news.views import article

urlpatterns = [

    url(r'articles/$', articles),
    url(r'articles/(?P<articleid>\d+)/$', article)

]
