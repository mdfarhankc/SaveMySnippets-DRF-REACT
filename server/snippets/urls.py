from django.urls import path

from .views import (
    CreateSnippetView, SnippetListView, SnippetDetailView, UpdateSnippetView, UserSnippetsView, DeleteSnippetView
)

urlpatterns = [
    path('snippets/', SnippetListView.as_view(), name='snippet-list'),
    path('snippets/create/', CreateSnippetView.as_view(), name='snippet-create'),
    path('snippets/<uuid:id>/', SnippetDetailView.as_view(), name='snippet-detail'),
    path('snippets/<uuid:id>/update/',
         UpdateSnippetView.as_view(), name='snippet-update'),
    path('snippets/<uuid:id>/delete/',
         DeleteSnippetView.as_view(), name='snippet-delete'),
    path('user/snippets/', UserSnippetsView.as_view(), name='user-snippet-list'),
]
