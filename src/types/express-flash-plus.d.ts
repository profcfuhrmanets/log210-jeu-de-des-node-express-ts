// Type definitions for express-flash-plus (modified from connect-flash by C. Fuhrman)
// Project: https://github.com/jaredhanson/connect-flash
// Definitions by: Andreas Gassmann <https://github.com/AndreasGassmann>
//                 Drew Lemmy <https://github.com/Lemmmy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />

declare namespace Express {
    export interface Request {
        flash(): { [key: string]: string[] };
        flash(message: string): string[];
        flash(type: string, message: string[] | string): number;
        flash(type: string, format: string, ...args: any[]): number;
    }
}

declare module "express-flash-plus" {
    import express = require('express');
    interface IConnectFlashOptions {
        unsafe?: boolean | undefined;
    }
    function e(options?: IConnectFlashOptions): express.RequestHandler;
    export = e;
}