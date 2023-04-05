import initDB from "../../../lib/helper/initDB";
import Blogs from "../../../lib/Modal/Blogs";
initDB();

export default async (req, res) => {
  const { id } = req.body;

  try {
    const filter = { _id: id };
    const curView = await Blogs.findOne(filter);
    const update = { views: curView.views + 1 };
    const addView = await Blogs.findOneAndUpdate(filter, update);
    res
      .status(201)
      .json({ view: addView.views, msg: "Count Increment", addView });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
