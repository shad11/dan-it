import {UserModel} from "../db/models";

export default class UserService {
    /**
     * @desc Method for creating user in DB
     *
     * @param user
     **/
    static async createUser(user) {
        const {
            email,
            password,
            nick,
            firstName,
            lastName,
            sex,
            birthday,
            country,
            city,
            avatarUrl,
            mobile
        } = user;

        return await UserModel.create({
            email,
            password,
            nick,
            firstName,
            lastName,
            sex,
            birthday,
            country,
            city,
            avatarUrl,
            mobile
        });
    }

    /**
     * @desc Find user by id in DB
     *
     * @param id
     * @returns {Promise<*>}
     **/
    static async getUserById(id) {
        return await UserModel
            .findById(id)
            .select('-__v') //select('-_id -__v')
            .exec();
    }

    /**
     * @desc Getting user by email and password
     *
     * @param email
     * @param pass
     * @returns {Promise<void>}
     **/
    static async getUserByEmailPass(email, pass) {
        return await UserModel
            .findOne({'email': email, 'password': pass})
            .select('-__v')
            .exec();
    }

    /**
     * @desc Getting all users
     *
     * @returns {Promise<unknown>}
     **/
    static async getAllUsers() {
        return await UserModel
            .find({}) //.find({ '_id': { '$ne': userId }}) // without current user
            .select('-__v')
            .exec();
    }

    /**
     * @desc Changing avatar photo URL
     *
     * @param userId
     * @param photoUrl
     * @returns {Promise<void>}
     **/
    static async addAvatarPhoto(userId, photoUrl) {
        await UserModel.updateOne(
            {'_id': userId},
            { avatarUrl:photoUrl }
        );
    }
}