import Quote from "@models/quote";
import { connectToDB } from "@utils/database"


export const GET = async (req, { params }) => {
    await connectToDB();

    try {
        const userId = (await params).userId;
        console.log("userId" + userId);
        const quotes = await Quote.find({creator: userId}).populate('creator');
        return new Response(JSON.stringify(quotes), { status: 201 });
    } catch(err) {
        return new Response("Unable to find quotes with this id", {status : 500});
    }
}

/* 

Testing GITHUB ACCOUNT PUSH AND PULL 

*/