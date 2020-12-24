import mongoose from "mongoose";
import mongooseSeq from "mongoose-sequence";

const autoIncrement = mongooseSeq(mongoose);

const postSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    author: {
        type: Number,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        select: true
    },
    announcement: String,
    text: {
        type: String,
        required: [true, 'Text is required'],
        select: true
    },
    city: {
        type: String,
        select: true,
        validate: [/\D/, 'Only letters can be in city field']
    },
    address: String,
    category: String,
    createDate: Date,
    dateStart: Date,
    dateEnd: Date,
    applicants: [{type: Number, ref: "User"}],
    membersAllowed: [{type: Number, ref: "User"}],
    membersDenied: [{type: Number, ref: "User"}]
}, {
    _id: false,
    timestamps: { createdAt: 'createDate' }
});

postSchema.plugin(autoIncrement, {id: 'postsCounter'});

export default mongoose.model('Post', postSchema);