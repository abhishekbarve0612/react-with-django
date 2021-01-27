from django.urls import path
from api.views import articleList, articleDetails, ArticleAPIView, ArticleDetailsAPIView, GenericAPIView

urlpatterns = [
    path('article/', articleList),
    path('article-class/', ArticleAPIView.as_view()),
    path('generic-article-class/', GenericAPIView.as_view()),
    path('generic-article-class/<int:id>', GenericAPIView.as_view()),

    path('article-details-class/<int:id>', ArticleDetailsAPIView.as_view()),
    path('article-details/<int:pk>', articleDetails),
]
