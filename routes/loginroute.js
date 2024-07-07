import { Router } from "express";
import { signIn } from "../controllers/logincontroller.js";

export const loginRoute = Router();

loginRoute.post('/login', signIn);
