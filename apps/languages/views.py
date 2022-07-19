# -*- encoding: utf-8 -*-
"""

"""

from django.shortcuts import render

# Create your views here.
def ChangeLanguage(request):
    return render(request, 'change_language.html')