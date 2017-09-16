from django.db import models

class DeleteRecord(models.Model):
    """
    Used as a base model for data models that should be kept after "deletion".

    """
    deleted = models.BooleanField(default=False)