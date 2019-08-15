from django.urls import path, re_path
from entry import views 

app_name="entry"

urlpatterns =[
    path('', views.home, name="home")
]