from django.contrib.auth import get_user_model
from django.core.signing import TimestampSigner, SignatureExpired, BadSignature
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from django.utils.translation import gettext_lazy as _

User = get_user_model()
signer = TimestampSigner()


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        if not User.objects.filter(email=value).exists():
            raise serializers.ValidationError(
                _("No account found with this email."))
        return value

    def create_reset_token(self, email):
        """Generate a signed token containing the user's email."""
        return signer.sign(email)


class PasswordResetConfirmSerializer(serializers.Serializer):
    token = serializers.CharField()
    password = serializers.CharField(
        write_only=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, attrs):
        if attrs["password"] != attrs["confirm_password"]:
            raise serializers.ValidationError(
                {"confirm_password": _("Passwords do not match.")})
        return attrs

    def validate_token(self, token):
        """Validate and unsign token, returning email if valid."""
        try:
            # token valid for 30 minutes
            email = signer.unsign(token, max_age=1800)
        except SignatureExpired:
            raise serializers.ValidationError(_("Reset token has expired."))
        except BadSignature:
            raise serializers.ValidationError(_("Invalid reset token."))
        return email

    def save(self):
        token = self.validated_data["token"]
        email = self.validate_token(token)
        password = self.validated_data["password"]

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError(_("Invalid token user."))

        user.set_password(password)
        user.save()
        return user
