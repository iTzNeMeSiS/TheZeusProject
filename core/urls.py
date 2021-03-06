# -*- encoding: utf-8 -*-

from app import views
from django.conf import settings
from django.contrib import admin
from django.conf.urls.static import static
from django.urls import path, include, re_path  # add this
from django.conf.urls.i18n import i18n_patterns
from app.views import ChangeLanguageView


urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin route
]


urlpatterns += i18n_patterns(
    path('i18n/', include('django.conf.urls.i18n')),
    path('language/', ChangeLanguageView.as_view(), name='change_language'),
    path('', include("customers.urls")),  # Django customers route
    path('', include("app.urls")),  # UI Kits Html files
    path('', include("authentication.urls")),  # Auth routes - login / register
    path('', include("paths.urls")),
    path('', include("foundations.urls")),
    path('', include("practice.urls")),
    path('', include("languages.urls")),
    # path('', IndexPageView.as_view(), name='index'),
    re_path(r'^.*\.html', views.pages, name='pages'),
    prefix_default_language=False
)

if settings.DEVEL:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
