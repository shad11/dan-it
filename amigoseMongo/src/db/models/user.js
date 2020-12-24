import mongoose from "mongoose";
import mongooseSeq from "mongoose-sequence";

const currDate = new Date();
const autoIncrement = mongooseSeq(mongoose);

const userSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        select: true
    },
    password: {
        type: String,
        required: true
    },
    nick: {
        type: String,
        required: true,
        select: true
    },
    firstName: {
        type: String,
        select: true,
        minLength: 3,
        maxLength: 20
    },
    lastName: String,
    sex: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true,
        max: currDate.setFullYear(currDate.getFullYear() - 12)
    },
    country: String,
    city: {
        type: String,
        select: true,
        validate: [/\D/, 'Only letters can be in city field']
    },
    avatarUrl: {
        type: String,
        select: true
    },
    mobile: String,
    registrationDate: Date,
    updateDate: Date,
    photos: [String],
    posts: [{ type: Number, ref: 'Post' }]
}, {
    _id: false,
    timestamps: { createdAt: 'registrationDate', updatedAt: 'updateDate' }
});

userSchema.plugin(autoIncrement, {id: 'usersCounter'});

export default mongoose.model('User', userSchema);