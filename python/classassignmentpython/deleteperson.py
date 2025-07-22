
def delete_person(people, person_to_delete):
    return [person for person in people if person != person_to_delete]

print(delete_person(['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak'], 'juan'))
print(delete_person(['juan', 'ana', 'michelle', 'stefany', 'lucy', 'barak'], 'juan'))
print(delete_person(['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak'], ''))

