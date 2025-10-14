import { Post_Model } from "../../schema/post.schema.js";
export const getallpost = async (req, res) => {
  const all = await Post_Model.find().populate("userId");
  res.status(200).json(all);
};
