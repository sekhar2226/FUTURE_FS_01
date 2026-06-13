from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail
from django.contrib.auth.models import User
from django.http import HttpResponse

from .serializers import ContactSerializer


@api_view(['POST'])
def contact_create(request):

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():

        contact = serializer.save()

        # Email to you
        send_mail(
            subject=f"Portfolio Contact - {contact.name}",
            message=f"""
Name: {contact.name}

Email: {contact.email}

Message:
{contact.message}
            """,
            from_email="sekharbasava26@gmail.com",
            recipient_list=["sekharbasava26@gmail.com"],
            fail_silently=False,
        )

        # Auto reply to visitor
        send_mail(
            subject="Thank you for contacting me",
            message=f"""
Hi {contact.name},

Thank you for reaching out through my portfolio website.

I have received your message and will get back to you as soon as possible.

Regards,
Basava Yagna Sekhar
Full Stack Developer
            """,
            from_email="sekharbasava26@gmail.com",
            recipient_list=[contact.email],
            fail_silently=False,
        )

        return Response({
            "message": "Message saved and email sent successfully"
        })

    return Response(serializer.errors, status=400)


# TEMPORARY ADMIN CREATION ROUTE
def create_admin(request):

    if not User.objects.filter(username="sekhar").exists():

        User.objects.create_superuser(
            username="sekhar",
            email="sekharbasava26@gmail.com",
            password="Sekhar@123"
        )

        return HttpResponse("Admin created successfully")

    return HttpResponse("Admin already exists")