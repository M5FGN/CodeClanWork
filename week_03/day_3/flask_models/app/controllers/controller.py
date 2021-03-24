from app import app

# Imports the method needed to run HTML/CSS
from flask import render_template

# Import data from the To Do List file
from app.models.todo_list import tasks

# @app.route('/')
# def index():
#     return "Hello World!"


# Remember when you are loading this to put localhost:5000/tasks
@app.route('/tasks')
def index():
    return render_template('index.html', title='- Home', tasks=tasks)

# Note: [variable_name] = [class_name]


@app.route('/tasks/<index>')
def show(index):
    return render_template('show.html', task=tasks[int(index)])
