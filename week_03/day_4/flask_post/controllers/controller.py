from todo import app
from flask import render_template, request, redirect
from models.todo_list import tasks, add_task 
from models.task import Task 

@app.route('/tasks')
def index():
    return render_template('index.html', title="Home", tasks=tasks)

@app.route('/tasks/<index>')
def show(index):
    return render_template('show.html', task=tasks[int(index)])

@app.route('/tasks/new')
def new():
    return render_template('new.html', title="Add Task")

@app.route('/tasks', methods=['post'])
def create():
    # print (request.form)
    task_title = request.form['title']
    task_desc = request.form['description']
    new_task = Task(task_title, task_desc, False)
    add_task(new_task)
    # Redirect to
    return redirect('/tasks')


   