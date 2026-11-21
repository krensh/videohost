from django.shortcuts import render

def intro(request):
    return render(request, 'intro.html')

def index(request):
    return render(request, 'index.html')

def watch(request, video_id):
    return render(request, 'watch.html', {'video_id': video_id})

def shop(request):
    return render(request, 'shop.html')
