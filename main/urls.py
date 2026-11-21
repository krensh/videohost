from django.urls import path
from . import views

urlpatterns = [
    path('', views.intro, name='intro'),
    path('catalog/', views.index, name='index'),
    path('watch/<int:video_id>/', views.watch, name='watch'),
    path('shop/', views.shop, name='shop'),
]
