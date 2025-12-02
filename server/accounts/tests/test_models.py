from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()


class UserModelTest(TestCase):

    def test_create_user_with_email(self):
        user = User.objects.create_user(
            email="test@sample.com",
            password="pass123",
            first_name="Test"
        )
        self.assertEqual(user.email, "test@sample.com")
        self.assertTrue(user.check_password("pass123"))
        self.assertFalse(user.is_staff)

    def test_create_superuser(self):
        admin = User.objects.create_superuser(
            email="admin@example.com",
            password="adminpass"
        )

        self.assertTrue(admin.is_staff)
        self.assertTrue(admin.is_superuser)

    def test_user_uuid_primary_key(self):
        user = User.objects.create_user(
            email="uuid@example.com", password="pass123")
        self.assertIsNotNone(user.id)
        self.assertEqual(len(str(user.id)), 36)  # UUID v4 length
