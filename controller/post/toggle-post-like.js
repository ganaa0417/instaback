import { Post_Model } from "../../schema/post.schema.js";

export const togglePostLike = async (req, res) => {
  const user = req.user;
  const params = req.params;
  const postId = params.postId;
  const post = await Post_Model.findById(postId);
  const postLike = post.like;
  const isLiked = postLike.includes(user._id);

  if (isLiked) {
    await Post_Model.findByIdAndUpdate(postId, {
      like: postLike.filter((like) => like.toString() !== user._id),
    });
    res.status(200).json({ message: "unlike" });
  } else {
    await Post_Model.findByIdAndUpdate(postId, {
      like: [...postLike, user._id],
    });
    res.status(200).json({ message: "like" });
  }
};
