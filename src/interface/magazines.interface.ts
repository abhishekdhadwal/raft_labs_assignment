import { Types } from 'mongoose';

export default interface IMagazines {
    title       : string;
    isbn        : string;
    authors     : Types.Array<string>;
    publishedAt : string;
}