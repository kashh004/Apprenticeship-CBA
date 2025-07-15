def linear_search(arr, target):
    for index in range(len(arr)):
        if arr[index] == target:
            return index 
    return -1  

arr = [8, 5, 7, 3, 2, 10, 9]
target = 2
result = linear_search(arr, target)

print("Index:", result)
