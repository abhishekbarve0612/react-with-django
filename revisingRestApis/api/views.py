from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from api.models import Article
from api.serializers import ArticleSerializer, ArticleModelSerializer
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def articleList(request):
    if request.method == "GET":
        articles = Article.objects.all()
        serializer = ArticleModelSerializer(articles, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == "POST":
        data = JSONParser().parse(request)
        serializer = ArticleModelSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def articleDetails(request, pk):
    try:
        article = Article.objects.get(pk=pk)
    except Article.DoesNotExist:
        return HttpResponse(status=404)
    if request.method == "GET":
        serializer = ArticleModelSerializer(article)
        return JsonResponse(serializer.data)

    elif request.method == "PUT":
        data = JSONParser().parse(request)
        serializer = ArticleModelSerializer(article, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.data, status=400)

    elif request.method == "DELETE":
        article.delete()
        return HttpResponse(status=204)
