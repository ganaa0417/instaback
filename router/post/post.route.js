import express from "express";
import { post } from "../../controller/post/get-user-post.js";
import { createPost } from "../../controller/post/create-post.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
import { getallpost } from "../../controller/post/get-post.js";
import { togglePostLike } from "../../controller/post/toggle-post-like.js";

const postRouter = express.Router();
postRouter.get("/posts", authMiddleware, post);
postRouter.post("/create/post", authMiddleware, createPost);
postRouter.get("/create/postall", authMiddleware, getallpost);
postRouter.post("/toggle-like/:postId", authMiddleware, togglePostLike)
export default postRouter;
