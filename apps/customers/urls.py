# -*- encoding: utf-8 -*-
"""

"""

from django.urls import path
from customers import views

urlpatterns = [
    path('settings/', views.ProfileView.as_view(), name='profile'),
]
