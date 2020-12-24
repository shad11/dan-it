import dotenv from "dotenv";
import {DevError} from "../errors";

const environment = dotenv.config();

if (!environment) {
    throw new DevError("Config file was not found!");
}

export default {
    /**
     * @desc Port on wich application is running
     * @type {Number}
     **/
    PORT: process.env.PORT || 3005,

    /**
     * @desc Soft version
     * @type {String}
     **/
    VERSION: process.env.VERSION || '1.0.0',

    /**
     * @desc Connection to DB
     * @type {String}
     **/
    MONGODB_URI: process.env.MONGODB_URI || '',
}