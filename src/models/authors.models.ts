import { Schema, model, InferSchemaType, Model, Types } from 'mongoose';
import { IAuthors } from '../interface/index.interface';

const schema = new Schema<IAuthors>({
    email       : { type: String, default : null },
    firstname   : { type: String, default : null },
    lastname    : { type: String, default : null }
});

const AuthorsModel = model<IAuthors>('authors', schema);
export default AuthorsModel