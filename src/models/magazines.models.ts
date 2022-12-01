import { Schema, model, InferSchemaType, Model, Types } from 'mongoose';
import { IMagazines } from '../interface/index.interface';

const schema = new Schema<IMagazines>({
    title       : { type: String, default : null },
    isbn        : { type: String, default : null },
    authors     : [{ type: String, default : null }],
    publishedAt : { type: String, default : null },
});

const MagazinesModel = model<IMagazines>('magazines', schema);
export default MagazinesModel