import initDB from "../../../../lib/helper/initDB";
import Blogs from "../../../../lib/Modal/Blogs";
initDB();

export default async function handler(req, res) {
  const { pid } = req.query;
  const posts = await Blogs.findById(pid);
  res.json(posts);
}
