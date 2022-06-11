declare type Cookie = {
    name: string;
    value: string;
    maxAge: number;
    domain?: string;
    path?: string;
    sameSite?: string;
};
/**
 * Set one or more cookies.
 */
export declare function setCookies(req: any, res: any, cookies: Array<Cookie>): void;
/**
 * Set one or more cookies.
 */
export declare function setCookie(req: any, res: any, cookie: Cookie): void;
export declare function deleteCookie(req: any, res: any, name: string): void;
export {};
//# sourceMappingURL=cookies.d.ts.map