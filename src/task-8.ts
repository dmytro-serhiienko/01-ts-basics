//? Завдання 8. HTTP-запити (файл task-8.ts)
// Функція fetchPosts робить GET-запит до API та повертає список постів.

// Завдання:

// Інсталюй бібліотеку axios командою npm i axios
// Створи інтерфейс Post, який описує об'єкт поста з такими полями:
// id: число
// title: рядок
// body: рядок
// 3. Типізуй axios.get, щоб вказати, що API повертає масив постів.

import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return response.data;
}

fetchPosts().then((posts) => {
  console.log(`Title of the first post: ${posts[0].title}`);
});
