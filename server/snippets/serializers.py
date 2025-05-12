from rest_framework import serializers

from .models import Snippet, Language, Tag


class CreateSnippetSerializer(serializers.ModelSerializer):
    language = serializers.PrimaryKeyRelatedField(
        queryset=Language.objects.all())
    tags = serializers.ListField(
        child=serializers.CharField(), write_only=True, required=False
    )

    class Meta:
        model = Snippet
        fields = ["title", "description", "content",
                  "is_public", "language", "tags"]

    def create(self, validated_data):
        tags_data = validated_data.pop("tags", [])
        snippet = Snippet.objects.create(**validated_data)

        for tag_name in tags_data:
            tag, _ = Tag.objects.get_or_create(name=tag_name.strip())
            snippet.tags.add(tag)

        return snippet


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = ["id", "name", "extension"]


class SnippetSerializer(serializers.ModelSerializer):
    language = LanguageSerializer()
    tags = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="name"
    )

    class Meta:
        model = Snippet
        fields = [
            "id", "title", "description", "content", "is_public", "language", "tags", "created_at", "updated_at"
        ]


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["id", "name"]
