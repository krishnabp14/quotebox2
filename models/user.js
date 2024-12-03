import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: "string",
        unique: [true, 'Email is already in use'],
        required: [true, 'Email is required'],
    },
    username: {
        type: "string",
        required: [true, 'Username is required'],
    },
    image: {
        type: "string"
    }
});


const User = models.User || model("User", userSchema);

export default User;