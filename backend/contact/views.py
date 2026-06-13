from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import ContactSerializer


@api_view(['GET', 'POST'])
def contact_create(request):

    if request.method == "GET":
        return Response({
            "name": "Contact Create",
            "description": ""
        })

    serializer = ContactSerializer(data=request.data)

    if serializer.is_valid():

        contact = serializer.save()

        return Response({
            "message": "Message saved successfully",
            "id": contact.id
        })

    return Response(serializer.errors, status=400)