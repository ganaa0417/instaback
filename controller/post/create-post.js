import { Post_Model } from "../../schema/post.schema.js";

export const createPost = async (req, res) => {
  const body = req.body;
  const createUser = await Post_Model.create({
    images: body.images,
    caption: body.caption,
    userId: body.userId,
  });
  res.json(createUser);
};
