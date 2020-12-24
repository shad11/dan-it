import {PostModel, UserModel} from "../db/models";

export default class PostService {
    /**
     * @desc Creating post in DB
     *
     * @param userId
     * @param postData
     * @returns {Promise<*>}
     **/
    static async createPost(userId, postData) {
        const {
            title,
            announcement,
            text,
            category,
            city,
            address
        } = postData;

        try {
            const newPost = await PostModel.create({
                author: userId,
                title,
                announcement,
                text,
                category,
                city,
                address
            });

            await UserModel.updateOne(
                {'_id': userId},
                { $addToSet: { posts: newPost._id }}
            );

            return newPost;
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @desc Getting post by ID in DB (with user who created that)
     *
     * @param postId
     * @returns {Promise<unknown>}
     **/
    static async getPostById(postId) {
        return await PostModel
            .findById(postId)
            .populate({path: 'author', select: '-__v'})
            .select('-__v')
            .lean()
            .exec();
    }

    /**
     * @desc Getting all posts
     *
     * @returns {Promise<unknown>}
     **/
    static async getAllPosts() {
        return await PostModel
            .find({})
            .select('-__v')
            .exec();
    }

    /**
     * @desc Getting all posts by userId
     *
     * @returns {Promise<unknown>}
     **/
    static async getAllPostsByUserId(userId) {
        return await PostModel
            .find({ 'author': userId })
            .select('-__v')
            .exec();
    }
}