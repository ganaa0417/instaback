import { Post_Model } from "../../schema/post.schema.js";

export const post = async (req, res) => {
  const user = req.user;
  const userId = user._id;
  const info = await Post_Model.find({ user: userId }).populate("userId");
  res.json(info);
};
