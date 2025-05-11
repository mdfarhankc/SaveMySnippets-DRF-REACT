import uuid
from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class Snippet(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(_("Title"))
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="snippets")
    description = models.TextField(_("Description"), blank=True)
    code = models.TextField(_("Code snippet"))
    language = models.ForeignKey(
        "Language", on_delete=models.SET_NULL, null=True, related_name="snippets")
    is_public = models.BooleanField(_("Is Public"), default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        ordering = ["-created_at"]
        verbose_name_plural = "Snippets"

    def __str__(self):
        return self.title


class Language(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(_("Name"), unique=True)
    extension = models.CharField(_("Extension"), max_length=10, default=".txt")
    
    class Meta:
        verbose_name_plural = "Languages"

    def __str__(self):
        return self.name