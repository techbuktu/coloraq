from django.urls import path, re_path
from entry import views 

urlpatterns =[
    path('', views.home, name="home")
]