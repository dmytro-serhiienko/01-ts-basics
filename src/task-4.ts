//? Задача 4. Функції (файл task-4.ts)
// Функція printUserInfo виводить інформацію про користувача, включаючи ім’я, вік і (опціонально) email.

// Завдання:
// Додай явну типізацію до параметрів функції: name, age та email.
// Зроби параметр email опціональним – щоб функція могла працювати як з ним, так і без нього.
// Типізуй повернення функції, зауваж що вона нічого явно не повертає.
// Залиш реалізацію функції без змін.

function printUserInfo(name: string, age: number, email?: string): void {
  console.log("Name:", name);
  console.log("Age:", age);
  if (email) {
    console.log("Email:", email);
  }
}

printUserInfo("Alice", 30);
printUserInfo("Bob", 25, "bob@mail.com");
