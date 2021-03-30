from db.run_sql import run_sql
from models.task import Task

import repositories.user_repository as user_repository

def save(task):
    # %s are place holders for the values on the line after
    sql = "INSERT INTO tasks (description, duration, user_id, completed) VALUES (%s, %s, %s, %s) RETURNING *"
    values = [task.description, task.duration, task.user.id, task.completed]
    # Get the reults from the run_sql file
    results = run_sql(sql, values)
    task.id = results[0]['id']
    return task

def delete_all():
    sql="DELETE FROM tasks"
    # no values being returned
    run_sql(sql)

def select_all():
    sql= "SELECT * FROM tasks"
    results = run_sql(sql)
    
    tasks = []

    for row in results:
        user = user_repository.find_by_id(row['user_id'])
        task = Task(row['description'], row['duration'], user, row['completed'])
        tasks.append(task)
    
    return tasks
