import {UserService, PostService} from "./services";

export default class TestServices {
    // ------- Users ------- //

    static async createTestUser() {
        try {
            return await UserService.createUser({
                email: `test${Date.now()}@gmail.com`,
                password: Date.now(),
                nick: `test${Date.now()}`,
                sex: 'male',
                birthday: new Date('2001-11-25')
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async getFirstUser() {
        const users = await UserService.getAllUsers();

        return users[0];
    }

    static async findUserById(userId) {
        return await UserService.getUserById(userId);
    }

    static async findUserByEmailPass(email, pass) {
        return await UserService.getUserByEmailPass(email, pass);
    }

    // ------- Posts ------- //

    static async createPost(userId) {
        const postData = {
            title: `Test${Date.now()}`,
            announcement: `For testing`,
            text: `Text for testing post ${Date.now()}: let\'s drink a cup of coffee ;)`,
            category: 'coffee',
            city: 'Kyiv'
        }

        return await PostService.createPost(userId, postData);
    }

    static async getPostById(postId) {
        const {author, ...post} = await PostService.getPostById(postId);

        return {
            author
            , post
        }
    }

    static async getAllPostsByUserId(postId) {
        return await PostService.getAllPostsByUserId(postId);
    }

    static async getAllPosts() {
        return await PostService.getAllPosts();
    }
}