import { Schema, model } from "mongoose";

const loginSchema = new Schema({
    name: { type: String },
    email: { type: String, required:true, unique:true},
    password: { type: String, required: true },
});

export const loginModel = model('login', loginSchema);