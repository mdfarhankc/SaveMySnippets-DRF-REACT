from django.urls import path
from .views import (
    LoginView, LogoutView, RegisterView, AuthUserView
)


urlpatterns = [
    path('login/', LoginView.as_view(), name='user_login'),
    path('register/', RegisterView.as_view(), name='user_register'),
    path('logout/', LogoutView.as_view(), name='user_logout'),
    path('me/', AuthUserView.as_view(), name='user_loggedin'),
]
