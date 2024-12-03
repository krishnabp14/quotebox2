import mongoose, { model, models, Schema} from "mongoose";


const quoteSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    quote: {
        type: String,
        required: [true, 'Quote is required']
    },
    quoteTag: {
        type: String,
        required: [true, 'Quote is required']
    }
});

const Quote = models.Quote || model('Quote', quoteSchema); 

export default Quote;