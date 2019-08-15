from django.db import models
from django.utils.text import slugify 

# Create your models here.
class Entry(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    color = models.CharField(max_length=25, verbose_name="Preferred Color")
    link = models.SlugField(max_length=125, blank=True)

    class Meta:
        verbose_name_plural = "Entries"

    def __str__(self):
        return "%s %s: %s" % (slef.first_name, self.last_name, self.color)

    def save(self, *args, **kwargs):
        if not self.link:
            self.link = slugify(self.first_name + str(self.id))
        super(Entry, self).save(*args, **kwargs)



