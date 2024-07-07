import { sigupModel } from "../models/signupmodel.js"; // Use the signup model
import bcrypt from "bcrypt";

//  Sign In
export const signIn = async (req, res, next) => {
    try {
        const { name, password } = req.body;

        // Find user by name in the signup collection
        const user = await sigupModel.findOne({ name });

        if (!user) {
            return res.status(404).send("User not found.");
        }

        // Compare the password with the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send("Invalid credentials.");
        }

        res.status(200).json({ message: "Sign in successful", user });
    } catch (error) {
        next(error);
    }
};
