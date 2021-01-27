from django.urls import path
from api.views import articleList, articleDetails, ArticleAPIView, ArticleDetailsAPIView

urlpatterns = [
    path('article/', articleList),
    path('article-class/', ArticleAPIView.as_view()),

    path('article-details-class/<int:id>', ArticleDetailsAPIView.as_view()),
    path('article-details/<int:pk>', articleDetails),
]
