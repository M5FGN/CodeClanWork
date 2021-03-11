chickens = [
  { "name": "Margaret", "age": 2, "eggs": 0 },
  { "name": "Hetty", "age": 1, "eggs": 2 },
  { "name": "Henrietta", "age": 3, "eggs": 1 },
  { "name": "Audrey", "age": 2, "eggs": 0 },
  { "name": "Mabel", "age": 5, "eggs": 1 },
]

# Create a function to count eggs but where different lists can be passed in.

def count_eggs(chickens):
    total_eggs = 0
    for chicken in chickens:
        total_eggs += chicken['eggs']
        chicken['eggs'] = 0    
    return total_eggs

eggs_counted = count_eggs(chickens)

print(f'{eggs_counted} eggs collected')

# Original Code - runs on the one list only.

# total_eggs = 0
# for chicken in chickens:
#     total_eggs += chicken['eggs']
#     chicken['eggs'] = 0
# print(f'{total_eggs} eggs collected')

