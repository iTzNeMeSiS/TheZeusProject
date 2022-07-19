from django.urls import path
from languages import views

urlpatterns = [
    path('language/', views.ChangeLanguage, name='languages'),
]