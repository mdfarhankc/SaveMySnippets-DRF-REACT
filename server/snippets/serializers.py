from rest_framework import serializers

from .models import Snippet, Language


class CreateSnippetSerializer(serializers.ModelSerializer):
    language = serializers.PrimaryKeyRelatedField(
        queryset=Language.objects.all())

    class Meta:
        model = Snippet
        fields = ["title", "description", "content", "is_public", "language"]


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ["id", "name", "extension"]


class SnippetSerializer(serializers.ModelSerializer):
    language = LanguageSerializer()

    class Meta:
        model = Snippet
        fields = [
            "id", "title", "description", "content", "is_public", "language", "created_at", "updated_at"
        ]
