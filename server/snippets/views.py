from rest_framework import generics, permissions

from .models import Snippet, Language
from .serializers import (
    CreateSnippetSerializer, SnippetSerializer, LanguageSerializer
)
from .permissions import IsOwnerOrReadonly


class CreateSnippetView(generics.CreateAPIView):
    """Create a new snippet"""
    queryset = Snippet.objects.all()
    serializer_class = CreateSnippetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class SnippetListView(generics.ListAPIView):
    """List all public snippets"""
    queryset = Snippet.objects.filter(is_public=True)
    serializer_class = SnippetSerializer
    permission_classes = [permissions.AllowAny]


class SnippetDetailView(generics.RetrieveAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def get_object(self):
        obj = super().get_object()
        if obj.is_public or obj.user == self.request.user:
            return obj
        else:
            raise PermissionDenied(
                "You don't have permission to view this snippet.")


class UpdateSnippetView(generics.UpdateAPIView):
    """Update an existing snippet"""
    queryset = Snippet.objects.all()
    serializer_class = CreateSnippetSerializer
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadonly]

    def get_object(self):
        obj = super().get_object()
        if obj.user != self.request.user:
            raise PermissionDenied("You can only edit your own snippets.")
        return obj


class DeleteSnippetView(generics.DestroyAPIView):
    queryset = Snippet.objects.all()
    permission_classes = [permissions.IsAuthenticated, IsOwnerOrReadonly]

    def get_object(self):
        obj = super().get_object()
        if obj.user != self.request.user:
            raise PermissionDenied("You can only delete your own snippets.")
        return obj


class UserSnippetsView(generics.ListAPIView):
    queryset = Snippet.objects.all()
    serializer_class = SnippetSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Snippet.objects.filter(user=self.request.user)


class ListLanguagesView(generics.ListAPIView):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = [permissions.AllowAny]
