from datetime import date
import requests
from bs4 import BeautifulSoup
from PIL import Image
from django.http import JsonResponse

def getMovies(request):
    result = {}
    today = date.today().strftime("%Y%m%d")
    BASE_URL = 'https://movie.naver.com'
    URL = f'{BASE_URL}/movie/sdb/rank/rmovie.nhn?sel=pnt&date={today}&page=1'
    resp = requests.get(URL)
    html = BeautifulSoup(resp.content, 'html.parser')
    divs = html.find_all('div', class_='tit5')
    for div in divs:
        address = f'{BASE_URL}{div.a["href"]}'
        resp_movie = requests.get(address)
        poster = BeautifulSoup(resp_movie.content, 'html.parser')
        poster = poster.find('div', class_='poster')
        poster = poster.find('img')
        title = poster['alt']
        poster = poster['src']
        poster = poster[:poster.find("?")]
        result[title] = poster
    
    return JsonResponse(result)