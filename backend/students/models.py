from django.db import models

# Create your models here.
class student(models.Model):
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    rollno = models.IntegerField(unique=True)
    department = models.CharField(max_length=100)
    programme = models.CharField(max_length=100)
    batch = models.CharField(max_length=100)
    dateofbirth = models.DateField()
    aadarno = models.CharField(max_length=12, unique=True)
    is_registered = models.BooleanField(default=False)
    email = models.EmailField(unique=True)
    age = models.IntegerField()
    photo = models.ImageField(upload_to='student_photos/', null=True, blank=True)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"  