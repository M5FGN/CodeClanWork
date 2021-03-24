#To use Flask
from flask import Flask

#
app = Flask(__name__)

# From the controllers file bring in the controller module
from controllers import controller



if (__name__ == '__main__'):
    # Start Sever in Debug Mode
    app.run(debug=True) 




