from django.urls import path

from .views import (
    CreateSnippetView, SnippetListView, SnippetDetailView, UpdateSnippetView, UserSnippetsView, DeleteSnippetView, ListLanguagesView
)

urlpatterns = [
    path('snippets/', SnippetListView.as_view(), name='snippet-list'),
    path('snippets/create/', CreateSnippetView.as_view(), name='snippet-create'),
    path('snippets/<uuid:pk>/', SnippetDetailView.as_view(), name='snippet-detail'),
    path('snippets/<uuid:pk>/update/',
         UpdateSnippetView.as_view(), name='snippet-update'),
    path('snippets/<uuid:pk>/delete/',
         DeleteSnippetView.as_view(), name='snippet-delete'),
    path('user/snippets/', UserSnippetsView.as_view(), name='user-snippet-list'),
    path('languages/', ListLanguagesView.as_view(), name='languages-list'),
]
