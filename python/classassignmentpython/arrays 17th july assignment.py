# 1. Find pair with given sum in the array
def find_pair_with_sum(arr, target):
    seen = set()
    for num in arr:
        if target - num in seen:
            return (target - num, num)
        seen.add(num)
    return None

print("1. Pair with given sum:", find_pair_with_sum([8, 7, 2, 5, 3, 1], 10))

# 2. Check if subarray with 0 sum exists or not
def has_zero_sum_subarray(arr):
    seen = set()
    total = 0
    for num in arr:
        total += num
        if total == 0 or total in seen:
            return True
        seen.add(total)
    return False

print("2. Subarray with 0 sum exists:", has_zero_sum_subarray([4, 2, -3, 1, 6]))

# 3. Print all sub-arrays with 0 sum
def print_all_zero_sum_subarrays(arr):
    from collections import defaultdict
    map_sum = defaultdict(list)
    result = []
    total = 0
    for i, num in enumerate(arr):
        total += num
        if total == 0:
            result.append((0, i))
        if total in map_sum:
            for start in map_sum[total]:
                result.append((start + 1, i))
        map_sum[total].append(i)
    return result

print("3. All sub-arrays with 0 sum:", print_all_zero_sum_subarrays([6, 3, -1, -3, 4, -2, 2, 4, 6, -12, -7]))

# 4. Sort binary array in linear time
def sort_binary_array(arr):
    zero_count = arr.count(0)
    return [0]*zero_count + [1]*(len(arr)-zero_count)

print("4. Sorted binary array:", sort_binary_array([1, 0, 1, 1, 0, 0, 1]))

# 5. Find a duplicate element in a limited range array
def find_duplicate(arr):
    for num in arr:
        if arr[abs(num)] >= 0:
            arr[abs(num)] = -arr[abs(num)]
        else:
            return abs(num)
    return None

print("5. Duplicate in limited range array:", find_duplicate([1, 3, 4, 2, 2]))

# 6. Find largest sub-array formed by consecutive integers
def find_largest_subarray_consecutive(arr):
    max_len = 0
    start_index = 0
    for i in range(len(arr)):
        seen = set()
        min_val, max_val = arr[i], arr[i]
        for j in range(i, len(arr)):
            if arr[j] in seen:
                break
            seen.add(arr[j])
            min_val = min(min_val, arr[j])
            max_val = max(max_val, arr[j])
            if max_val - min_val == j - i:
                if j - i + 1 > max_len:
                    max_len = j - i + 1
                    start_index = i
    return arr[start_index:start_index + max_len]

print("6. Largest sub-array with consecutive integers:", find_largest_subarray_consecutive([1,7,8,9,10, 12, 11]))

# 7. Find maximum length sub-array having given sum
def max_len_subarray_given_sum(arr, target):
    sum_index = {}
    total = 0
    max_len = 0
    start_index = -1
    for i, num in enumerate(arr):
        total += num
        if total == target:
            max_len = i + 1
            start_index = 0
        if total - target in sum_index:
            if i - sum_index[total - target] > max_len:
                max_len = i - sum_index[total - target]
                start_index = sum_index[total - target] + 1
        if total not in sum_index:
            sum_index[total] = i
    if max_len == 0:
        return []
    return arr[start_index:start_index + max_len]

print("7. Max length sub-array with sum 15:", max_len_subarray_given_sum([10, 5, 2, 7, 1, 9], 15))

# 8. Find maximum length sub-array having equal number of 0’s and 1’s
def max_len_equal_0_1(arr):
    arr = [1 if x == 1 else -1 for x in arr]
    return max_len_subarray_given_sum(arr, 0)

print("8. Max length sub-array with equal 0’s and 1’s:", max_len_equal_0_1([0, 1, 0, 1, 0, 1]))

# 9. Inplace merge two sorted arrays
def inplace_merge(arr1, arr2):
    m, n = len(arr1), len(arr2)
    i = m - 1
    j = 0
    while i >= 0 and j < n:
        if arr1[i] > arr2[j]:
            arr1[i], arr2[j] = arr2[j], arr1[i]
        i -= 1
        j += 1
    arr1.sort()
    arr2.sort()
    return arr1, arr2

arr1 = [1, 5, 9]
arr2 = [2, 3, 8]
print("9. Inplace merged sorted arrays:", inplace_merge(arr1, arr2))

# 10. Merge two arrays by satisfying given constraints
def merge_with_constraints(arr1, arr2):
    return sorted(set(arr1 + arr2))

print("11. Merged with constraints:", merge_with_constraints([1, 2, 2, 3], [3, 4, 5]))
