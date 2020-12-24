import connectToDB from "./mongodb";

export default async ({config}) => {
    await connectToDB({config});
    console.log('✌MongoDB is connected');
}