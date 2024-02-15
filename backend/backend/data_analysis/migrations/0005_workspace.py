# Generated by Django 4.2.6 on 2023-10-18 08:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("data_analysis", "0004_project_created_at_project_deleted_at_and_more"),
    ]

    operations = [
        migrations.CreateModel(
            name="WorkSpace",
            fields=[
                ("workspace_id", models.AutoField(primary_key=True, serialize=False)),
                ("workspace_name", models.CharField(max_length=255)),
                (
                    "project_id",
                    models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="data_analysis.project"),
                ),
            ],
        ),
    ]