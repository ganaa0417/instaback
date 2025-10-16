import express from "express";
import { sighup } from "../../controller/user/sigh-up.js";
import { login } from "../../controller/user/login.js";
import { followUser } from "../../controller/user/followUser.js";
import { authMiddleware } from "../../middleware/auth-middleware.js";
const useRouter = express.Router();

useRouter.post("/sign-up", sighup);
useRouter.post("/login", login);
useRouter.post("/toggleFollow/:followedUserId", authMiddleware, followUser);
export default useRouter;
