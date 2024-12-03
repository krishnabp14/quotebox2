import Quote from "@models/quote";
import { connectToDB } from "@utils/database"


export const GET = async (req, res) => {
    await connectToDB();

    try {
        const quotes = await Quote.find().populate('creator');
        return new Response(JSON.stringify(quotes), {status : 200});
    } catch( error) {
        return new Response("Unable to fetch Quotes", {status : 500});
    }
}