//? Задача 7. Типізація Promise (файл task-7.ts)
// Функція getMessage повертає проміс, який через затримку повертає рядок.

// Завдання:
// Додай до функції явну типізацію, яка вказує, що вона повертає проміс.
// Переконайся, що значення, з яким виконається проміс, – це рядок (string).

function getMessage(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello from TS");
    }, 1000);
  });
}

getMessage().then((result) => console.log(result));
