from django.urls import path
from api.views import TasksList, ApiOverView, TaskDetail

urlpatterns = [
    path("", ApiOverView),
    path("task-list/", TasksList.as_view()),
    path("task-list/<int:id>", TaskDetail.as_view()),
]
