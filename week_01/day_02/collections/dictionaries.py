# my_first_dictionary = {}

# my_second_dictionary = dict()

# meals = {'breakfast' : 'yogurt', 'lunch' : 'roll', 'dinner' : 'steak'}
# print(meals)

# # How to access a key value pair
# print(meals['breakfast'])

# # Print if the value exists - returns a boolean
# print('supper' in meals)

# # Adding a Value
# meals['supper'] = 'pancakes'
# print(meals)

# # Change a Value
# meals['dinner'] = 'pasta'
# print(meals)


# # Delete a Value
# del meals['breakfast']
# print(meals)

# # Converts to list (keys)
# print(list(meals))

# # Converts to list (values)
# print(list(meals.values()))




# Nested Dictionary

countries = {
 'uk' : {
     'capital' : 'London',
     'population' : 1000,
 },
 'germany' : {
     'capital' : 'berlin',
     'population' : 900,
     'languages': ['german', 'english']
 }
}

print(countries)

# Print Germany Only
print(countries['germany'])

# print ppopulation of germany only
print(countries['germany']['population'])

# print second language of germany
print(countries['germany']['languages'][1])