from rest_framework import serializers
from api.models import Post


class PostSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=50)
    description = serializers.CharField(max_length=2000)
    author = serializers.CharField(max_length=50)
    date = serializers.DateTimeField()

    def create_data(self, validated_data):
        return Post.objects.create(validated_data)

    def update_data(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.author = validated_data.get("author", instance.author)
        instance.description = validated_data.get(
            "description", instance.description)
        instance.date = validated_data.get("date", instance.date)
        instance.save()
        return instance


class PostModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        #fields = ["id", "title", "author", "email"]
        fields = '__all__'
