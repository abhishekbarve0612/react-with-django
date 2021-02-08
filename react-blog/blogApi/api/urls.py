from django.urls import path
from api.views import postList, postDetails, PostAPIView, PostDetailsAPIView, GenericAPIView

urlpatterns = [
    path('post/', postList),
    path('post-class/', PostAPIView.as_view()),
    path('generic-post-class/', GenericAPIView.as_view()),
    path('generic-post-class/<int:id>', GenericAPIView.as_view()),

    path('post-details-class/<int:id>', PostDetailsAPIView.as_view()),
    path('post-details/<int:pk>', postDetails),
]
