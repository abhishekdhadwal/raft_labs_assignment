import { Request, Response } from 'express';
import * as Models from '../models/index.models';
import { ERROR } from '../config/index.config';
import fs from 'fs';
import axios from 'axios';
import csvjson from 'csvjson';
import sortArray from 'sort-array';
import { ExportToCsv } from 'export-to-csv';


class helper {

    static read_books_response = async () => {
        try {
            const url = "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv";
            const response = await axios.get(url, { responseType: 'blob' });
            let options = {
                delimiter: ';',
                quote: '"'
            };
            let result = csvjson.toObject(response.data, options);
            let data = []
            if (result.length) {
                for (let i = 0; i < result.length; i++) {
                    let { title, isbn, authors, description } = result[i];
                    let split_authors = authors.split(',');
                    data.push({
                        title: title,
                        isbn: isbn,
                        authors: split_authors,
                        description: description
                    })
                }
            }
            return data;
        }
        catch (err) {
            throw err;
        }
    }

    static read_magazine_response = async () => {
        try {
            const url = "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv";
            const response = await axios.get(url, { responseType: 'blob' });
            let options = {
                delimiter: ';',
                quote: '"'
            };
            let result = csvjson.toObject(response.data, options);
            let data = []
            if (result.length) {
                for (let i = 0; i < result.length; i++) {
                    let { title, isbn, authors, publishedAt } = result[i];
                    let split_authors = authors.split(',');
                    data.push({
                        title: title,
                        isbn: isbn,
                        authors: split_authors,
                        publishedAt: publishedAt
                    })
                }
            }
            return data;
        }
        catch (err) {
            throw err;
        }
    }

}


export default class app_module extends helper {

    static read_books = async () => {
        try {
            let response = await this.read_books_response()
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    static read_magazines = async () => {
        try {
            let response = await this.read_magazine_response()
            return response;
        }
        catch (err) {
            throw err;
        }
    }

    static read_authors = async () => {
        try {
            const url = "https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv";
            const response = await axios.get(url, { responseType: 'blob' });
            let options = {
                delimiter: ';',
                quote: '"'
            };
            let result = csvjson.toObject(response.data, options);
            return result;
        }
        catch (err) {
            throw err;
        }
    }

    static find_book_by_isbn = async (req: Request) => {
        try {
            let { isbn } = req.query;
            let response = await this.read_books_response()
            if (!!isbn) {
                let filtered_data = response.filter((data: any) => isbn == data.isbn);
                if (filtered_data.length) {
                    return filtered_data[0];
                }
                else {
                    return {};
                }
            }
        }
        catch (err) {
            throw err;
        }
    }

    static find_magazine_by_isbn = async (req: Request) => {
        try {
            let { isbn } = req.query;
            let result = await this.read_magazine_response();
            if (!!isbn) {
                let filtered_data = result.filter((data: any) => isbn == data.isbn);
                if (filtered_data.length) {
                    return filtered_data[0];
                }
                else {
                    return {};
                }
            }
        }
        catch (err) {
            throw err;
        }
    }

    static find_book_by_email = async (req: Request) => {
        try {
            let { email } = req.query;
            let response = await this.read_books_response()
            if (!!email) {
                let filtered_data = response.filter((data: any) => {
                    if (data.authors.includes(email) == true) {
                        return data
                    }
                });
                if (filtered_data.length) {
                    return filtered_data;
                }
                else {
                    return [];
                }
            }
        }
        catch (err) {
            throw err;
        }
    }

    static find_magazine_by_email = async (req: Request) => {
        try {
            let { email } = req.query;
            let response = await this.read_magazine_response()
            if (!!email) {
                let filtered_data = response.filter((data: any) => {
                    if (data.authors.includes(email) == true) {
                        return data
                    }
                });
                if (filtered_data.length) {
                    return filtered_data;
                }
                else {
                    return [];
                }
            }
        }
        catch (err) {
            throw err;
        }
    }

    static sort_books_and_magazine = async (req: Request) => {
        try {

            let books = await this.read_books_response()
            let magazines = await this.read_magazine_response()
            let data = [...books, ...magazines]
            let sort_options = {
                by: 'title',
                order: 'asc'
            }
            let sort_data = sortArray(data, sort_options)
            return sort_data
        }
        catch (err) {
            throw err;
        }
    }

    static add_books = async (req: Request) => {
        try {
            let book = await Models.Books.create(req.body);
            return book;
        }
        catch (err) {
            throw err;
        }
    }

    static add_magazine = async (req: Request) => {
        try {
            let magazine = await Models.Magazines.create(req.body);
            return magazine;
        }
        catch (err) {
            throw err;
        }
    }

    static export_books = async () => {
        try {
            let books = await Models.Books.find({}, { _id: 0, __v: 0 }, { lean: true });
            if (books.length) {
                const options = {
                    fieldSeparator: ';',
                    quoteStrings: '"',
                    decimalSeparator: '.',
                    showLabels: true,
                    showTitle: true,
                    title: 'books',
                    useTextFile: false,
                    useBom: true,
                    useKeysAsHeaders: true
                };
                const export_as_csv = new ExportToCsv(options);
                const csv_data = export_as_csv.generateCsv(books, true);
                fs.writeFileSync('books.csv',csv_data)
                return "csv generated"
            }
            else {
                return "failed to generate csv"
            }
        }
        catch (err) {
            throw err;
        }
    }

    static export_magazine = async () => {
        try {
            let books = await Models.Magazines.find({}, { _id: 0, __v: 0 }, { lean: true });
            if (books.length) {
                const options = {
                    fieldSeparator: ';',
                    quoteStrings: '"',
                    decimalSeparator: '.',
                    showLabels: true,
                    showTitle: true,
                    title: 'magazine',
                    useTextFile: false,
                    useBom: true,
                    useKeysAsHeaders: true
                };
                const export_as_csv = new ExportToCsv(options);
                const csv_data = export_as_csv.generateCsv(books, true);
                fs.writeFileSync('magazine.csv',csv_data)
                return "csv generated"
            }
            else {
                return "failed to generate csv"
            }
        }
        catch (err) {
            throw err;
        }
    }

}