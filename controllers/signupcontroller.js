import { sigupModel } from "../models/signupmodel.js";
import bcrypt from "bcrypt";

// Sign Up
export const signUp = async (req, res, next) => {
    try {
        const { name, password } = req.body;

        // Hash the password before saving
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newSignup = await sigupModel.create({ name, password: hashedPassword });
        res.json(newSignup);
    } catch (error) {
        next(error);
    }
};
