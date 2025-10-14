import express from "express";
import { sighup } from "../../controller/user/sigh-up.js";
import { login } from "../../controller/user/login.js";
const useRouter = express.Router();

useRouter.post("/sign-up", sighup);
useRouter.post("/login", login);

export default useRouter;
