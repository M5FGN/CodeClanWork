# numbers = [1,2,3,4,5]

# # # Execute a for loop for each number in the list
# # for number in numbers:
# #     print(number*3)

# # Example 2

# total = 0

# for number in numbers:
#     total = total + number
# print(total)

# Loop through a dictionary

chickens = [
  {"name": "Margaret", "age": 2, "eggs": 0},
  {"name": "Hetty", "age": 1, "eggs": 2},
  {"name": "Henrietta", "age": 3, "eggs": 1},
  {"name": "Audrey", "age": 2, "eggs": 0},
  {"name": "Mabel", "age": 5, "eggs": 1},
]

for chicken in chickens:
    print(f"{chicken['name']} is {chicken['age']}")

# NOTE - 2 sets of quotes so you need to use different styles for nesting

# Total Eggs
# total = 0
# for chicken in chickens:
#     total = total + chicken['eggs']
# print(total)

# Clear Eggs after Count

total = 0
for chicken in chickens:
    total = total + chicken['eggs']
    chicken['eggs'] = 0
print(chickens) 
