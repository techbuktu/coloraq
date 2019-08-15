from rest_framework.response import Response 
from rest_framework.reverse import reverse 
from rest_framework.decorators import api_view 
from rest_framework import generics

from entry.api.serializers import EntrySerializer

@api_view(['GET'])
def api_root(request, format=None):
    """
    The root/homepage of the Coloraq API.
    """
    return Response({
        'Entries': reverse('entry_api:entry_list', request=request, format=format),
    })

class EntryListView(generics.ListCreateAPIView):
    """
    Create a new entry.Entry or retrieve list of current entryies.
    """
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    lookup_field = "link"


class EntryDetailView(generics.RetrieveAPIView):
    """
    GETs and returns a single entry.Entry object in serialized form.
    """
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer
    lookup_field = "link"


