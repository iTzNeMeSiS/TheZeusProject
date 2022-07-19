# -*- encoding: utf-8 -*-
"""

"""

from django.urls import path
from paths import views

urlpatterns = [
    path('paths/', views.paths, name='paths'),
]