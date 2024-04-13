import youtube_dl

STREAMER = "SpaceXStorm"

def get_starlink_videos(mission: str):
    # Configurar opciones para youtube_dl
    ydl_opts = {
        'extract_flat': True,  # Extraer solo metadatos básicos
        'quiet': True  # No mostrar mensajes de progreso en la consola
    }

    # Crear objeto youtube_dl
    ydl = youtube_dl.YoutubeDL(ydl_opts)

    # URL de búsqueda en YouTube
    search_query = f'ytsearchall:"{mission}"'

    # Extraer información de los videos de YouTube
    with ydl:
        result = ydl.extract_info(search_query, download=False)

    #print(result)

    for entry in result['entries']:
        if entry.get('uploader') == STREAMER:
            streamer = entry['uploader']
            url = 'https://www.youtube.com/watch?v='+entry['url']
        else:
            streamer = ""
            url=""
    # print(result)
    # print("mision",mission)
    # print(streamer)
    # print(url)

    video_dict = {"streamer": streamer, "url": url}

    print(video_dict)

    #print(video_results)

    return video_dict