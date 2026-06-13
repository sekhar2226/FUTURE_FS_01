from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.core.mail import send_mail

from .serializers import ContactSerializer


@api_view(['POST'])
def contact_create(request):

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():

        contact = serializer.save()

        try:
            # Email to you
            send_mail(
                subject=f"Portfolio Contact - {contact.name}",
                message=f"""
Name: {contact.name}

Email: {contact.email}

Message:
{contact.message}
                """,
                from_email=None,
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
                from_email=None,
                recipient_list=[contact.email],
                fail_silently=False,
            )

            return Response({
                "message": "Message saved and email sent successfully"
            })

        except Exception as e:
            return Response({
                "message": "Message saved but email failed",
                "error": str(e)
            }, status=500)

    return Response(serializer.errors, status=400)