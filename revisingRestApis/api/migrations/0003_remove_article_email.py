# Generated by Django 3.1.5 on 2021-01-27 07:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210127_1220'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='email',
        ),
    ]
