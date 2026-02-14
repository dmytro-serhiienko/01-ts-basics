//? Задача 2. Інтерфейси (файл task-2.ts)
// У цьому фрагменті коду є об'єкт product, який описує товар.

// Завдання:

// Створи інтерфейс Product, який описує структуру цього обєкта.
// Зроби поле id тільки для читання - воно не повинно змінюватись після створення обєкта.
// Зроби поле description необовязковим - не всі товари можуть його мати.

// Типізуй змінну product за допомогою створеного інтерфейсу.
// Залиш властивості обʼєкта product і їх значення без змін.

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Tablet",
  description: "Compact and fast",
};

console.log(`Product: ${JSON.stringify(product)}`);
