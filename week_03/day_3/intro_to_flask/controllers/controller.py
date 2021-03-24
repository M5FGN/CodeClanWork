from app import app


# Setting up our home route and defining the Index route - there should be no lines between the route and the definition.
@app.route('/')
def index():
    return "Hello World"

#Route is hard coded to the page name 'Mary'
@app.route('/Mary')
def greet():
    return 'Hello Mary'


# Setting a route to a variable
@app.route('/<variable_name>')
def greet_variable(variable_name):
    return "Hello " + variable_name

# Setting a route on /add to take in two numbers and do the add calculation.
@app.route('/add/<num1>/<num2>')
def add(num1, num2):
    return str(int(num1) + int(num2))