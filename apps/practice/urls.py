# -*- encoding: utf-8 -*-
"""

"""

from django.urls import path
from practice import views

urlpatterns = [
    path('code/', views.practice, name='practice'),
]