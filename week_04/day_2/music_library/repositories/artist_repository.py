from db.run_sql import run_sql
from models.artist import Artist
from models.album import Album

def save(artist):
    sql = "INSERT INTO artists (name) VALUES (%s) RETURNING *"
    values = [artist.name]
    results = run_sql(sql, values)
    id = results[0]['id']
    artist.id = id

    return artist


def delete_all():
    sql="DELETE FROM artists"
    # no values being returned
    run_sql(sql)


def find_by_id(id):
    artist = None

    sql = "SELECT * FROM artists WHERE id = %s"
    values = [id]
    result = run_sql(sql, values)

    if result is not None:
        return Artist(result['name'], result['id'])
