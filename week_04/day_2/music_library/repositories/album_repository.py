from db.run_sql import run_sql
from models.album import Album
from models.artist import Artist

from repositories.artist_repository import artist_repository

def save(album):
    sql = "INSERT INTO albums (title, artist_id, genre) VALUES (%s, %s, %s) RETURNING *"
    values = [album.title, album.artist.id, album.genre]
    results = run_sql(sql, values)
    id = results[0]['id']
    album.id = id

    return album


def delete_all():
    sql="DELETE FROM albums"
    # no values being returned
    run_sql(sql)


def find_by_id(id):

    album = None

    sql= "SELECT * FROM albums WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)[0]
    
    if result is not None:
        artist = artist_repository.find_by_id(result['artist_id'])
        album = Album(result['title'], artist, result['genre'], result['id'])

    return album