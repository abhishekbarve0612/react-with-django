from rest_framework import serializers
from api.models import Article


class ArticleSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=50)
    email = serializers.EmailField(max_length=254)
    author = serializers.CharField(max_length=50)
    date = serializers.DateTimeField()

    def create_data(self, validated_data):
        return Article.objects.create(validated_data)

    def update_data(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.author = validated_data.get("author", instance.author)
        instance.email = validated_data.get("email", instance.email)
        instance.date = validated_data.get("date", instance.date)
        instance.save()
        return instance


class ArticleModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        #fields = ["id", "title", "author", "email"]
        fields = '__all__'
