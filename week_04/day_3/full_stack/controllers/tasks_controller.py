from flask import Flask, render_template, request, redirect

# Import the repository not * (all) as there is a select_all in both.
from repositories import task_repository
from repositories import user_repository

from models.task import Task

from flask import Blueprint

tasks_blueprint = Blueprint("tasks", __name__)

# RESTful CRUD Routes

# INDEX
# GET '/tasks'
@tasks_blueprint.route("/tasks")
def tasks():
    tasks = task_repository.select_all() # NEW
    return render_template("tasks/index.html", all_tasks = tasks)


# NEW
# GET '/tasks/new'
@tasks_blueprint.route('/tasks/new')
def new():
    # Gets the users from the user_repository
    users = user_repository.select_all()
    return render_template('tasks/new.html', users = users)

# CREATE
# POST '/tasks'
# Methods is telling the route which methods to accept.
@tasks_blueprint.route('/tasks', methods=['POST'])
def create():
    # Each value pulled out from the form 
    description = request.form['description']
    user_id = request.form['user_id']
    duration = request.form['duration']
    completed = request.form['completed']
    # Pulling in the data from the User table
    user = user_repository.select(user_id)
    # Create a new Task with the data from the form
    task = Task(description , user, duration, completed)
    # Save task
    task_repository.save(task)
    return redirect('/tasks')

# SHOW
# GET '/tasks/<id>'
@tasks_blueprint.route('/tasks/<id>')
def show(id):
    task = task_repository.select(id)
    return render_template('tasks/show.html', task=task)

# EDIT
# GET '/tasks/<id>/edit'
@tasks_blueprint.route('/tasks/<id>/edit')
def edit(id):
    task = task_repository.select(id)
    users = user_repository.select_all()
    return render_template('tasks/edit.html', task=task, users=users)

# UPDATE
# PUT '/tasks/<id>'
# Browser can't do Put requests in Python only JavaScript so this will be done as a Post
@tasks_blueprint.route('/tasks/<id>', methods=['POST'])
def update(id):
    description = request.form['description']
    user_id = request.form['user_id']
    duration = request.form['duration']
    completed = request.form['completed']
    # Pulling in the data from the User table
    user = user_repository.select(user_id)
    # Id is included as it is already been created and is being updated
    task = Task(description, user, duration, completed, id)
    task_repository.update(task)
    # String formatting is used here for redirection URL - which is the show route
    return redirect(f'/tasks/{id}')



# DELETE
# DELETE '/tasks/<id>'
@tasks_blueprint.route('/tasks/<id>/delete', methods=['POST'])
def delete(id):
    task_repository.delete(id)
    return redirect('/tasks')