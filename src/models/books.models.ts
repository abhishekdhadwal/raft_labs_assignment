import { Schema, model, InferSchemaType, Model, Types } from 'mongoose';
import { IBooks } from '../interface/index.interface';

const schema = new Schema<IBooks>({
    title       : { type: String, default : null },
    isbn        : { type: String, default : null },
    authors     : [{ type: String, default : [] }],
    description : { type: String, default : null },
});

const BooksModel = model<IBooks>('books', schema);
export default BooksModel
