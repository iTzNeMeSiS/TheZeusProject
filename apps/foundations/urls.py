# -*- encoding: utf-8 -*-
"""

"""

from django.urls import path
from foundations import views

urlpatterns = [
    path('foundations/', views.foundations, name='foundations'),
]