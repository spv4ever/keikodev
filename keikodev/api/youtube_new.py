from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from oauth2client.tools import argparser

import dotenv
import os

dotenv.load_dotenv()
YOUTUBE_KEY = os.environ.get("YOUTUBE_KEY")

def search_videos(query):
    # Inserta aquí tu clave de API
    api_key = YOUTUBE_KEY
    print(query)
    # Crea el servicio de la API de YouTube
    youtube = build('youtube', 'v3', developerKey=api_key)
    results = []
    try:
        # Realiza la búsqueda de videos por descripción
        search_response = youtube.search().list(
            q=query,
            part='id,snippet',
            maxResults=5,
            channelId='UCxjGXSXK3Ss-mkiZ-wYtjtg'
        ).execute()
        # Procesa los resultados de la búsqueda
        for search_result in search_response.get('items', []):
            if search_result['id']['kind'] == 'youtube#video':
                # print('%s (%s)-(%s)-(%s)-(%s)' % (search_result['snippet']['title'],
                #                     search_result['id']['videoId'],
                #                     search_result['snippet']['channelId'],
                #                     search_result['snippet']['publishedAt'],
                #                     search_result['snippet']['channelTitle']))
                video_title = search_result['snippet']['title']
                video_id = search_result['id']['videoId']
                channel_id = search_result['snippet']['channelId']
                published_at = search_result['snippet']['publishedAt']
                channel_title = search_result['snippet']['channelTitle']

                video_url = f"https://www.youtube.com/watch?v={video_id}"

                result_dict = {
                    "video_title": video_title,
                    "video_id": video_id,
                    "channel_id": channel_id,
                    "published_at": published_at,
                    "channel_title": channel_title,
                    "url": video_url
                }

                results.append(result_dict)
                #print(results)

    except HttpError as e:
        print('An HTTP error %d occurred:\n%s' % (e.resp.status, e.content))

    return results
