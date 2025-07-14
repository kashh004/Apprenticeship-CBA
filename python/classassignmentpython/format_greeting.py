from datetime import date, datetime

def calculate_age(birth_date_str):
    birth_date = datetime.strptime(birth_date_str, '%Y-%m-%d').date()
    today = date.today()
    return today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

def format_greeting(persons):
    return [f"Hello, my name is {p['name']} and I am {calculate_age(p['birth_date'])} years old" for p in persons]

people = [
    {"name": "Joe", "birth_date": "1992-04-23"},
    {"name": "Bob", "birth_date": "1982-06-10"},
    {"name": "Erika", "birth_date": "1996-11-01"},
    {"name": "Dylan", "birth_date": "2006-09-15"},
    {"name": "Steve", "birth_date": "2010-01-05"}
]
print(format_greeting(people))