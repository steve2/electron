
from django.conf.urls import url

from auth2.views import signin
from auth2.views import signout
from auth2.views import current

urlpatterns = [

    url(r'login/$', signin),
    url(r'logout/$', signout),
    url(r'current/$', current)

]
