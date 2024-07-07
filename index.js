import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import { signUpRoute } from "./routes/signuproute.js";
import { loginRoute } from "./routes/loginroute.js";


// Connect to database
await mongoose.connect(process.env.MONGO_URL);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(signUpRoute);
app.use(loginRoute);

// Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const port = process.env.PORT || 4900;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
