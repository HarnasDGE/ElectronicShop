import { postsDb } from "../data/postsDb";

export const getPostByParam = (postParam) => {
  // Znajdź produkt o podanym id
  const post = postsDb.find((post) => post.param === postParam);

  // Zwróć produkt lub wiadomość, że nie znaleziono
  if (post) {
    return post;
  } else {
    return `Post ${postParam} nie został znaleziony.`; // poprawiona wiadomość
  }
};
