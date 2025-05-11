from rest_framework import permissions


class IsOwnerOrReadonly(permissions.BasePermission):
    """
    Custom permission to only allow owners of a snippet to edit or delete it.
    All users can view the snippets, but only the owner can update or delete.
    """
    
    def has_object_permission(self, request, view, obj):
        # Allow read-only access for anyone
        if request.method in permissions.SAFE_METHODS:
            return True
        # Only allow editing if the user is the owner of the snippet
        return obj.user == request.user