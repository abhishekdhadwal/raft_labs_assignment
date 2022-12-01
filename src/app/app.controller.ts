import { Request, Response } from 'express';
import app_module from './app.module';

export default class controller {

    static read_books = async (req : Request, res : Response) => {
        try {
            let response = await app_module.read_books()
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static read_magazines = async (req : Request, res : Response) => {
        try {
            let response = await app_module.read_magazines()
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static read_authors = async (req : Request, res : Response) => {
        try {
            let response = await app_module.read_authors()
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static find_book_by_isbn = async (req : Request, res : Response) => {
        try {
            console.log("req",req.params)
            let response = await app_module.find_book_by_isbn(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static find_magazine_by_isbn = async (req : Request, res : Response) => {
        try {
            let response = await app_module.find_magazine_by_isbn(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static find_book_by_email = async (req : Request, res : Response) => {
        try {
            console.log("req",req.params)
            let response = await app_module.find_book_by_email(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static find_magazine_by_email = async (req : Request, res : Response) => {
        try {
            let response = await app_module.find_magazine_by_email(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }
    
    static sort_books_and_magazine = async (req : Request, res : Response) => {
        try {
            let response = await app_module.sort_books_and_magazine(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static add_books = async (req : Request, res : Response) => {
        try {
            let response = await app_module.add_books(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static add_magazines = async (req : Request, res : Response) => {
        try {
            let response = await app_module.add_magazine(req)
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static export_books = async (req : Request, res : Response) => {
        try {
            let response = await app_module.export_books()
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }

    static export_magazine = async (req : Request, res : Response) => {
        try {
            let response = await app_module.export_magazine()
            let message = "Success";
            res.send({
                success: true,
                message: message,
                data: response
            });
        }
        catch (err) {
            console.log("err...", err)
            let status_code = err.status_code != undefined ? err.status_code : 400;
            let type = err.type != undefined ? err.type : "Bad Request";
            let message = err.custom_msg != undefined ? err.custom_msg : "Something went wrong";
            res.status(status_code).send({
                success: false,
                error: type,
                message: message
            });
            res.end();
        }
    }
    
    

}