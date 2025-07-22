def merge_list(list1, list2):
    merged = []
    for item in list1:
        merged.append(item)
    for item in list2:
        merged.append(item)
    return merged

list1 = ['Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell']
list2 = ['Lucas', 'Jake', 'Scott', 'Amy', 'Molly', 'Hannah', 'Lucas']
print(merge_list(list1, list2))