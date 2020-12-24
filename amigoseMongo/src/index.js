import "@babel/polyfill";

import express from "express";
import config from "./config";
import loaders from "./loaders";

import TestServices from "./testServices";

const startService = async () => {
    const app = express();

    await loaders({config});

    app.listen(config.PORT, error => {
        if (error) {
            process.exit(1);
            return;
        }

        console.log(`Server is listening on port: ${config.PORT}; current version: ${config.VERSION}`);
    })
}

startService();

const testServices = async() => {
    //---- users

    //const {_id: userId, email, password} = await TestServices.createTestUser();
    const {_id: userId, email, password} = await TestServices.getFirstUser();

    let user = await TestServices.findUserById(userId);
    console.log(`findUserById -> id: ${userId} = ${user._id}, email: ${email} = ${user.email}, pass: ${password} = ${user.password}`);

    user = await TestServices.findUserByEmailPass(email, password);
    console.log(`findUserByEmailPass -> email: ${email}, pass: ${password}, id: ${userId} = ${user._id}`);

    //---- posts
    const {_id: userIdPost} = await TestServices.createTestUser();

    const postFirst = await TestServices.createPost(userIdPost);
    const postSecond = await TestServices.createPost(userIdPost);

    const {author, post} = await TestServices.getPostById(postFirst._id);
    console.log(`getPostById -> authorId: ${userIdPost} = ${author._id}, postId: ${postFirst._id} = ${post._id}`);

    const allUserPostsCnt = await TestServices.getAllPostsByUserId(userIdPost);
    console.log(`getAllPostsByUserId -> should be 2, current count: ${allUserPostsCnt.length}`);

    console.log(await TestServices.getAllPosts());

}

testServices();

//export default startService;