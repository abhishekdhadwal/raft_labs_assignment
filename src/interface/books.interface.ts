import { Types } from 'mongoose';

export default interface IBooks {
    title       : string;
    isbn        : string;
    authors     : Types.Array<string>;
    description : string;
}
