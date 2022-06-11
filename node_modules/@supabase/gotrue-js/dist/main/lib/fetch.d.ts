export interface FetchOptions {
    headers?: {
        [key: string]: string;
    };
    noResolveJson?: boolean;
}
export declare type RequestMethodType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export declare function get(url: string, options?: FetchOptions): Promise<any>;
export declare function post(url: string, body: object, options?: FetchOptions): Promise<any>;
export declare function put(url: string, body: object, options?: FetchOptions): Promise<any>;
export declare function remove(url: string, body: object, options?: FetchOptions): Promise<any>;
//# sourceMappingURL=fetch.d.ts.map