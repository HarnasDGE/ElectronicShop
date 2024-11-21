import { postsDb } from "../data/postsDb";

export const getPostById = (id) => {
  // Znajdź produkt o podanym id
  const post = postsDb.find((post) => post.id === Number(id));

  // Zwróć produkt lub wiadomość, że nie znaleziono
  if (post) {
    return post;
  } else {
    return `Post o id ${id} nie został znaleziony.`; // poprawiona wiadomość
  }
};
