from django.db import models
from django.contrib.auth.models import User
from shared.models import DeleteRecord

# Create your models here.

class Article(DeleteRecord):
    """
    Represents a news article as displayed on the Home page.
    """

    # Required.
    title = models.CharField(max_length=128, blank=False, null=False)
    text = models.TextField(blank=False, null=False)
    author = models.ForeignKey(User, blank=False, null=False)

    # Optional.
    subtitle = models.CharField(max_length=64, blank=True, null=True)
    links = models.CharField(max_length=1024, blank=True, null=True)

    # Automatic.
    dateCreated = models.DateTimeField(auto_now_add=True)
    lastModified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return '%s (%s)' % (self.text, self.dateCreated)