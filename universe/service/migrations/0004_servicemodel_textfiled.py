# Generated by Django 4.0 on 2022-03-01 07:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0003_alter_servicemodel_name_alter_servicemodel_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicemodel',
            name='textfiled',
            field=models.TextField(null=True),
        ),
    ]
