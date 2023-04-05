import baseUrl from "../../baseUrl";

// to get All blogs
export const getBlogs = async () => {
  const res = await fetch("https://itsgaurav.vercel.app/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
};

// to get single Blog
export const getsingle = async (id) => {
  const res = await fetch("https://itsgaurav.vercel.app/api/post/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  await fetch(baseUrl + "/api/viewsIn", {
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
