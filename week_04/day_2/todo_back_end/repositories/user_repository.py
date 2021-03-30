from db.run_sql import run_sql
from models.user import User

# Save 
def save(user):
    # Set up the SQL Statement
    sql = f"INSERT INTO users (name) VALUES (%s) RETURNING *" 
    values = [user.name]
    # Will return the newly created row as a dictionary inside a list for all save functions this is likely to be the same.
    results = run_sql(sql, values)
    id = results[0]['id']
    user.id = id
    return user


def delete_all():
    sql = 'DELETE FROM users'
    # no values being returned
    run_sql(sql)

def find_by_id(id):
    sql = "SELECT * FROM users WHERE id = %s"
    values = [id]
    results = run_sql(sql, values)
    user_dictionary = results[0]

    if user_dictionary is not None:
        return User(user_dictionary['name'], user_dictionary['id'])

