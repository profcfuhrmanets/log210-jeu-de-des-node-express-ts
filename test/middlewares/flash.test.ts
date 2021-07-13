import 'jest-extended';
import flash from '../../src/middlewares/flash'
import type { Request, Response, NextFunction } from 'express'

let req: Request;
let res: Response;
let next: NextFunction;

beforeEach(() => {
    req = { session: {} } as Request;
    res = { locals: {} } as Response;
    next = function () { } as NextFunction;

    const middleware = flash();
    middleware(req, res, next);
});

describe('::middleware(req, res, next)', () => {
    it('throw an error when session is not supported', () => {
        expect.assertions(1);
        let req = {} as Request; // without `session`
        let res = { locals: {} } as Response;
        let next = function () { } as NextFunction;

        try {
            const middleware = flash();
            middleware(req, res, next);
        } catch (error) {
            const err = error as Error;
            expect(error.toString()).toContain('session');
        }

    });
    it('append one methods named "flash" onto req', () => {
        expect(typeof req.flash).toBe('function');
    });

    it('append flashMessageQueue onto res.locals', () => {
        expect(res.locals.flashMessageQueue).toBeDefined();
        expect(res.locals.flashMessageQueue.hasMessage).toBeDefined();
        expect(res.locals.flashMessageQueue).toBe(res.locals.flashMessageQueue);
    });
});

describe('req.flash()', function () {
    it('write one object {message, category} into the queue', function () {
        const flashMessageQueue = res.locals.flashMessageQueue;
        const testMessage = 'test message';
        const testMessage2 = 'yet another test message';

        req.flash(testMessage);
        expect(flashMessageQueue.length).toBe(1);
        expect(flashMessageQueue.messages()[0].message).toBe(testMessage);
        expect(flashMessageQueue.messages()[0].category).toBeUndefined();

        req.flash(testMessage2, 'info');
        expect(flashMessageQueue.length).toBe(2);
        expect(flashMessageQueue.messages()[1].message).toBe(testMessage2);
        expect(flashMessageQueue.messages()[1].category).toBe('info');
    });
});

describe('res.locals.flashMessageQueue', function () {
    describe('::hasMessage()', function () {
        it('return false when there are no flashed messages and otherwise return true', function () {
            const flashMessageQueue = res.locals.flashMessageQueue;
            expect(flashMessageQueue.hasMessage()).toBeFalse();

            req.flash('test message');
            expect(flashMessageQueue.hasMessage()).toBeTrue();
        });
    });

    describe('::shift()', function () {
        it('return the first message and remove it from the queue', function () {
            const flashMessageQueue = res.locals.flashMessageQueue;
            req.flash('test message');
            req.flash('message test');
            expect(flashMessageQueue.length).toBe(2);
            expect(flashMessageQueue.shift().message).toBe('test message');
            expect(flashMessageQueue.length).toBe(1);

            req.flash('test message');
            expect(flashMessageQueue.shift().message).toBe('message test');
            expect(flashMessageQueue.length).toBe(1);
        });
    });

    describe('::messages()', function () {
        beforeEach(()=>{
            req.flash('Roses are red');
            req.flash('violets are blue', 'info');
            req.flash('unexpected `{`', 'info');
            req.flash('on line 32', 'error');
        })
        it('return an array of messages', function () {
            const flashMessages = res.locals.flashMessageQueue.messages('info', 'error', undefined);
            expect(flashMessages.length).toBe(4);
            expect(flashMessages[2].message).toBe('unexpected `{`');
        });
        it('has an optional "categories" filter argument', function () {
            const flashMessages = res.locals.flashMessageQueue.messages('info');
            expect(flashMessages.length).toBe(2);
            expect(flashMessages[1].message).toBe('unexpected `{`');
        });
        it('allow the "categories" filter argument to have many argument', function () {
            const flashMessages = res.locals.flashMessageQueue.messages('info', 'error');
            expect(flashMessages.length).toBe(3);
            expect(flashMessages[1].message).toBe('unexpected `{`');
            expect(flashMessages[2].message).toBe('on line 32');
        });
    });
});
