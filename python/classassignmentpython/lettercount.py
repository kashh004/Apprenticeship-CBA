def count(s):
    s = s.lower().replace(" ", "")
    result = {}
    for char in s:
        if char.isalpha():
            result[char] = result.get(char, 0) + 1
    return result

print(count("Hello World"))