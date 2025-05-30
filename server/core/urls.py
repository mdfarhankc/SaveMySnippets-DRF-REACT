from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    # Local urls
    path('api/auth/', include('accounts.urls')),
    path('api/', include('snippets.urls')),
]
