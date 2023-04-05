import { getAllBlogsURL, getSingleURL, incView } from "../../allLinks";
import baseUrl from "../../baseUrl";

// to get All blogs
export const getBlogs = async () => {
  const res = await fetch(getAllBlogsURL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// to get single Blog
export const getsingle = async (id) => {
  const res = await fetch(getSingleURL + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  await fetch(incView, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });

  return res.json();
};
