from django.contrib import admin
from .models import Snippet, Language, Tag


class SnippetInline(admin.TabularInline):
    model = Snippet
    extra = 0
    fields = ('title', 'user', 'created_at', 'is_public')
    readonly_fields = ('created_at',)


@admin.register(Language)
class LanguageAdmin(admin.ModelAdmin):
    model = Language
    list_display = ('id', 'name', 'extension')
    inlines = [SnippetInline]


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    model = Tag
    list_display = ('id', 'name')


@admin.register(Snippet)
class SnippetAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "language", "user",
                    "created_at", "updated_at")
    list_filter = ("language", "created_at", "updated_at")
    search_fields = ("title", "content", "user__username")
    ordering = ("-created_at",)
    readonly_fields = ("created_at", "updated_at")
    filter_horizontal = ("tags",)
