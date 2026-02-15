// 🔹 БЛОК 1 — Прості типи
// Оголоси змінні з правильними типами:
// 	•	userName — рядок
// 	•	age — число
// 	•	isOnline — булеве значення

// const userName: string = "Bob";
// console.log("🚀 ~ userName:", userName);

// const age: number = 22;
// console.log("🚀 ~ age:", age);

// const isOnline: boolean = true;
// console.log("🚀 ~ isOnline:", isOnline);

// ✅ Задача 2
// Створи змінну id, яка може бути:
// 	•	або числом
// 	•	або рядком

// let id: number | string = 11;
// console.log("🚀 ~ id:", id);

// id = "bob";
// console.log("🚀 ~ id:", id);

// ✅ Задача 3

// Напиши функцію sum, яка приймає два числа та повертає їх суму.

// function sum(a: number, b: number): number {
//   return a + b;
// }

// console.log(sum(4, 5));

//! 🔹 БЛОК 2 — Типізація об’єктів
// Опиши тип користувача:
// 	•	id — number
// 	•	name — string
// 	•	email — string
// 	•	isActive — boolean

// Створи змінну user з цим типом.

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// const aliceUser: User = {
//   id: 3,
//   name: "Alice",
//   email: "string@gmail.com",
//   isActive: true,
// };

// console.table(aliceUser);

// ✅ Задача 5
// Створи масив користувачів з попереднім типом.

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// const usersMany: User[] = [
//   { id: 3, name: "Alice", email: "alice@gmail.com", isActive: true },
//   { id: 4, name: "Ana", email: "ana@gmail.com", isActive: false },
//   { id: 5, name: "Bob", email: "bob@gmail.com", isActive: true },
// ];

// console.table(usersMany);

//! 🔹 БЛОК 3 — Власні типи (type)
// ✅ Задача 6
// Створи власний тип Product:
// 	•	title — string
// 	•	price — number
// 	•	inStock — boolean

// type Product = {
//   title: string;
//   price: number;
//   inStock: boolean;
// };

// // Створи функцію, яка приймає Product і повертає рядок:
// // "Назва: ..., Ціна: ..."

// function productFoo(product: Product): string {
//   return `Назва: ${product.title}, Ціна:${product.price}, Наявність: ${product.inStock}`;
// }

// console.log(productFoo({ title: "Bobsnale", price: 22, inStock: true }));

//! 🔹 БЛОК 4 — Типізація функцій
// ✅ Задача 7
// Напиши функцію multiply, яка:
// 	•	приймає два числа
// 	•	повертає число

// Явно пропиши тип повернення.

// function multiply(a: number, b: number): number {
//   return a * b;
// }

// console.log(multiply(2, 2));

//! ✅ Задача 8
// Опиши тип функції Logger, яка:
// 	•	приймає string
// 	•	нічого не повертає

// Створи змінну log цього типу.

// function log(word: string): void {
//   console.log(word);
// }

// log("hello");

//! 🔹 БЛОК 5 — Enum
// ✅ Задача 9

// Створи enum для ролей:
// 	•	ADMIN
// 	•	USER
// 	•	GUEST

// Створи об’єкт користувача з роллю ADMIN.

// ⸻

// 🔹 БЛОК 6 — Generics

// ✅ Задача 10

// Напиши generic-функцію identity, яка:
// 	•	приймає значення будь-якого типу
// 	•	повертає це ж значення

// ⸻

// ✅ Задача 11

// Створи generic-інтерфейс ApiResponse<T>:
// 	•	data — T
// 	•	status — number

// Створи приклад відповіді для користувача.

// ⸻

// 🔹 БЛОК 7 — Типізація Promises

// ✅ Задача 12

// Напиши функцію fetchUser, яка:
// 	•	повертає Promise<string>
// 	•	через setTimeout повертає "User loaded"

// ⸻

// 🔹 БЛОК 8 — Типізація HTTP

// ✅ Задача 13

// Опиши функцію getData, яка:
// 	•	приймає URL (string)
// 	•	повертає Promise<{ id: number; name: string }>

// (реалізацію можна замокати)
