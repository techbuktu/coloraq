from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns 
# To automatically serialize and return the client' requested 'Content-Type' data format: JSON, XML, etc.
from entry.api import views 

app_name="entry_api"

urlpatterns = format_suffix_patterns([
    path('entries/', views.EntryListView.as_view(), name="entry_list"),
    path('entries/<slug:link>/', views.EntryDetailView.as_view(), name="entry_detail"),
    path('', views.api_root, name="api_root")
])