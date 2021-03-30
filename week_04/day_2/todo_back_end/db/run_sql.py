
# This file is a template file which will never change - other than the DATABASE_NAME. 

# Python Library needed to work with database
import psycopg2  
import psycopg2.extras as ext

# Function takes in SQL statement to be executes and sometimes values (the default is added incase there are no values)
def run_sql(sql, values = None):
    # Variable to store connection
    conn = None
    # Variable to store results
    results = []
    # Try to connect to the database - TRY/CATCH(Except) - try to execuite the code but if it doesn't work then do the exception.
    try:
        # Connecting to the database with the DATABASE_NAME - at this point you would need to pass in the database login details if the database was not local.
        conn=psycopg2.connect("dbname='task_manager'")
        # Results are brought back as a tuple by default - here we change this to a dictionary
        cur = conn.cursor(cursor_factory=ext.DictCursor)   
        # Create a cursor the be able to interact with the database
        cur.execute(sql, values)
        # Commit changes to the database
        conn.commit()
        # Return the results
        results = cur.fetchall()
        # Close the cursor
        cur.close()           
    # Only runs if the TRY above has failed - prints the error.
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    # Run always - regardless of whether the TRY or CATCH above has worked
    finally:
        # If the database has run the conn variable above will have been changed, therefore, not None so the if statement will run to close the database and set conn back to None 
        if conn is not None:
            conn.close()
    # Returns the results
    return results