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

// enum Role {
//   adminRole = "ADMIN",
//   userRole = "USER",
//   guestRole = "GUEST",
// }

// const boss: Role = Role.adminRole;
// console.log("🚀 ~ boss:", boss);

// ⸻

//! 1️⃣ Типізація змінних

// Створи змінні:
// 	•	userName — string
// 	•	age — number
// 	•	isAdmin — boolean
// 	•	hobbies — масив рядків

// interface User {
//   userName: string;
//   age: number;
//   isAdmin: boolean;
//   hobbies: string[];
// }

// const Petro: User = {
//   userName: "Petro",
//   age: 33,
//   isAdmin: true,
//   hobbies: ["basket", "football"],
// };
// console.log("🚀 ~ Petro:", Petro);

//! 2️⃣ Типізація об’єкта

// Опиши тип User, який має:
// 	•	id — number
// 	•	name — string
// 	•	email — string
// 	•	isActive — boolean

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// const Bob: User = {
//   id: 44,
//   name: "Bob",
//   email: "bob@gmail.com",
//   isActive: true,
// };
// console.log("🚀 ~ Bob:", Bob);

//! 3️⃣ Функція з типами

// Напиши функцію add(a, b), яка:
// 	•	приймає два числа
// 	•	повертає їх суму

// Обов’язково явно типізуй параметри та return.

// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(2, 3));

//! 4️⃣ Функція з об’єктом

// Створи тип Product:
// 	•	title — string
// 	•	price — number

// Напиши функцію getDiscountedPrice(product, discount)
// 	•	discount — number (відсотки)
// 	•	функція повертає нову ціну

// type Product = {
//   title: string;
//   price: number;
// };

// const electronic: Product = {
//   title: "Iphone",
//   price: 1100,
// };
// console.log("🚀 ~ electronic:", electronic);

// function getDiscountedPrice(product: Product, discount: number) {
//   return `Назва товару: ${product.title} , Ціна зі знижкою: ${product.price - (product.price * discount) / 100}`;
// }

// console.log(getDiscountedPrice(electronic, 20));

//!!!!!!! _______________________________________________________

// 🟡 Рівень 2 — Enum + Union + Кастомні типи

// 5️⃣ Enum ролей

// Створи enum Role:
// 	•	ADMIN
// 	•	USER
// 	•	GUEST

// Створи тип Account, який має:
// 	•	email
// 	•	role

// Створи 3 акаунти з різними ролями.

// ⸻

// 6️⃣ Union тип

// Створи функцію formatId(id), яка:
// 	•	приймає number | string
// 	•	якщо число — повертає “ID: <число>”
// 	•	якщо рядок — повертає “ID: <рядок>”

// ⸻

// 7️⃣ Optional поле

// Створи тип Post:
// 	•	title
// 	•	description
// 	•	tags (необов’язкове поле, масив рядків)

// Створи 2 пости — один з тегами, один без.

// ⸻

// 🟠 Рівень 3 — Generics

// 8️⃣ Generic функція

// Напиши функцію identity, яка:
// 	•	приймає будь-який тип
// 	•	повертає те саме значення

// Перевір з:
// 	•	string
// 	•	number
// 	•	об’єктом

// ⸻

// 9️⃣ Generic для масиву

// Створи функцію getFirstElement, яка:
// 	•	приймає масив будь-якого типу
// 	•	повертає перший елемент

// ⸻

// 🔟 Generic тип

// Створи generic тип ApiResponse<T>:
// 	•	data
// 	•	status
// 	•	error (optional)

// Створи:
// 	•	ApiResponse<User>
// 	•	ApiResponse<Product>

// ⸻

// 🔵 Рівень 4 — Promises + HTTP типізація

// 1️⃣1️⃣ Типізація Promise

// Створи функцію fetchUser, яка:
// 	•	повертає Promise
// 	•	всередині просто resolve з фейковими даними

// ⸻

// 1️⃣2️⃣ Async/Await

// Напиши async функцію getUserData, яка:
// 	•	викликає fetchUser
// 	•	логить результат

// ⸻

// 1️⃣3️⃣ Типізація HTTP відповіді

// Створи тип Todo:
// 	•	userId
// 	•	id
// 	•	title
// 	•	completed

// Створи функцію fetchTodos, яка:
// 	•	повертає Promise<Todo[]>
// 	•	поки без реального fetch — просто замокай дані

// ⸻

// 🔴 Рівень 5 — Міні практика (як на реальному проєкті)

// 1️⃣4️⃣ Система користувачів

// Створи:
// 	•	enum Role
// 	•	тип User
// 	•	масив користувачів
// 	•	функцію getAdmins(users) → повертає тільки адмінів
// 	•	функцію getActiveUsers(users)

// ⸻

// 1️⃣5️⃣ Міні API шар

// Створи:
// 	•	generic ApiResponse<T>
// 	•	функцію createResponse<T>(data: T)
// 	•	функцію handleError(message: string)

// ⸻

// Якщо хочеш 🔥
// Можу:
// 	•	✅ зробити для тебе тест-перевірку
// 	•	✅ дати задачі рівня Junior-співбесіди
// 	•	✅ дати маленький реальний mini-project
// 	•	✅ або перевірити твій код якщо скинеш

// Пиши що хочеш далі 💪
