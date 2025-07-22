def quick_sort(arr):
    if len(arr)<=1:
        return arr
    pivot=arr[0]
    left=[x for x in arr[1:] if x<=pivot]
    right=[x for x in arr[1:] if x>pivot]
    return quick_sort(left) + [pivot] + quick_sort(right)
numbers=[38, 27, 43, 3, 9, 82, 10]
sorted_numbers=quick_sort(numbers)
print("Sorted array is:", sorted_numbers)