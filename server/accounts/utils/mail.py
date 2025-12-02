from django.core.mail import send_mail
from django.conf import settings


def send_password_reset_email(email, token):
    reset_link = f"{settings.FRONTEND_URL}/reset-password?token={token}"

    subject = "Password Reset Request"
    message = (
        "You requested a password reset.\n\n"
        f"Reset your password using the link below:\n{reset_link}\n\n"
        "If you did not request this, you may safely ignore this email."
    )

    send_mail(
        subject,
        message,
        settings.DEFAULT_FROM_EMAIL,
        [email],
        fail_silently=False,
    )
