# -*- encoding: utf-8 -*-
"""

"""

from django.urls import path
from languages import views

urlpatterns = [
    path('language/', views.ChangeLanguage, name='language'),
]