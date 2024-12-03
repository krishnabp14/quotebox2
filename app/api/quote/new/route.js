import Quote from "@models/quote";
import { connectToDB } from "@utils/database"

export const POST = async (req, res) => {
    await connectToDB();

    try {
        const { quoteDescription, quoteTag, userId} = await req.json();
        const newQuote = new Quote({
            creator: userId,
            quote: quoteDescription,
            quoteTag: quoteTag,
        })
        
        await newQuote.save();
        return new Response(JSON.stringify(newQuote), { status: 201} );
    } catch(error) {
        return new Response("Error Submitting Quote", { status: 500} );
    }
}