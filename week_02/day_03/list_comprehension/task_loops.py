# Part 1
# Using single list comprehension, and the following list:
ages = [5, 15, 64, 27, 84, 26]
# Return a list of only the odd ages.
# Part 2
# Using single list comprehension, and the following list:

odd_ages = [age for age in ages if age % 2 == 1]
print(odd_ages)

chicken_names = ["Hen Solo", "Cluck Norris", "Hennifer Lopez", "ChewPekka", "Feather Locklear"]

more_than_10  = [chicken_name for chicken_name in chicken_names if len(chicken_name) >= 10]
print(more_than_10)

starts_with_h = [chicken_name for chicken_name in chicken_names if chicken_name[0] == 'H']
print(starts_with_h)


# Part 3
# Using single list comprehension, and the following list:
words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
# Build a new list, with the first letter from each word
# Convert each letter to lower case
# Expected output: ["t", "q", "b", "f", "j", "o", "t", "l", "d"]

first_letter = [word[0].lower() for word in words]
print(first_letter)   