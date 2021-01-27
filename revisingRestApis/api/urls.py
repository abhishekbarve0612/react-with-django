from django.urls import path
from api.views import articleList, articleDetails

urlpatterns = [
    path('article/', articleList),
    path('article-details/<int:pk>', articleDetails),
]
