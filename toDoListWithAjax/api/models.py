from django.db import models


class Tasks(models.Model):

    title = models.CharField(max_length=50)
    completed = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        self.title
