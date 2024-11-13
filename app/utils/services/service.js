import { Categories } from "../data/data";
import { postsLists } from "../data/posts";

export const findPostByTitle = (title) => {
  const formattedTitle = title
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[^\w\s]/gi, "")
    .replace(/-+/g, "");

  const foundPost = postsLists.find(
    (post) =>
      post.title
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^\w\s]/gi, "")
        .replace(/-+/g, "") === formattedTitle,
  );

  return foundPost || null;
};

export const findCategoryByTitle = (title) => {
  return Categories.find(
    (category) =>
      category?.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\s]/gi, "-") === title,
  );
};
