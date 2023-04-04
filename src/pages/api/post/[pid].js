import initDB from "../../../../lib/helper/initDB";
import Blogs from "../../../../lib/Modal/Blogs";
initDB();

export default async function handler(req, res) {
  try {
    const { pid } = req.query;
    const post = await Blogs.findOne({ _id: pid });
    return res.status(200).json({ post });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
