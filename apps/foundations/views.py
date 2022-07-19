# -*- encoding: utf-8 -*-
"""

"""

from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required(login_url="/login/")
def foundations(request):
    return render(request, 'foundations.html')