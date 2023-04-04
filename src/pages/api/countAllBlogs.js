import initDB from "../../../lib/helper/initDB";
import Blogs from "../../../lib/Modal/Blogs";
initDB();

export default async (req, res) => {
    try {
        const countConnect = await Blogs.find().countDocuments();
        res.json(countConnect);
      } catch (error) {
        console.log(error);
      }
};