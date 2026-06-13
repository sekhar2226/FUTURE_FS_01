from django.contrib.auth.models import User
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ContactSerializer


@api_view(['POST'])
def contact_create(request):

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():

        contact = serializer.save()

        return Response({
            "message": "Message saved successfully"
        })

    return Response(serializer.errors, status=400)


def create_admin(request):

    username = "sekhar"
    password = "YourPassword123"
    email = "sekharbasava26@gmail.com"

    if not User.objects.filter(username=username).exists():

        User.objects.create_superuser(
            username=username,
            email=email,
            password=password
        )

        return HttpResponse("Admin created successfully!")

    return HttpResponse("Admin already exists!")