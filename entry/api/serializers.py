from rest_framework import serializers 
from entry.models import Entry 

class EntrySerializer(serializers.HyperlinkedModelSerializer):
    """
    An API serializer for the entry.Entry model.
    """
    
    class Meta:
        model = Entry
        fields = ('first_name', 'last_name','age','color','link')


