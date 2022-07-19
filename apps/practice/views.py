# -*- encoding: utf-8 -*-
"""

"""

from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url="/login/")
def practice(request):
    return render(request, 'practice.html')
