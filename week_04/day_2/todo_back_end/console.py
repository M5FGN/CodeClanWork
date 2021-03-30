import pdb

from models.user import User
from models.task import Task

# import the repository as an alias to make it easier to use in the code
import repositories.task_repository as task_repository 
import repositories.user_repository as user_repository 


task_repository.delete_all()
user_repository.delete_all()

#Seeded Data added so the set up can be tested
user1 = User('Jack')
#Add once db is created
user_repository.save(user1)
user2 = User('Victor')
#Add once db is created
user_repository.save(user2)

print(user1.id)

# Printing the values to the terminal to test.
# print(user1.name)
# print(user1.id)

#Seeded Data added so the set up can be tested
task1 = Task('Walk Dog', 20, user1)
task_repository.save(task1)
task2 = Task('Water Plants', 30, user2)
task_repository.save(task2)
# Printing the values to the terminal to test.
# print(task1.user.name)


