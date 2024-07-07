import express from 'express';
import { signUp } from '../controllers/signupcontroller.js';

const router = express.Router();

// Define POST route for sign up
router.post('/signup', signUp);


export { router as signUpRoute };