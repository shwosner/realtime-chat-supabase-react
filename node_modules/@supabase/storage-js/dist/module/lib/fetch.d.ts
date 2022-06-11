export interface FetchOptions {
    headers?: {
        [key: string]: string;
    };
    noResolveJson?: boolean;
}
export interface FetchParameters {
    signal?: AbortSignal;
}
export declare type RequestMethodType = 'GET' | 'POST' | 'PUT' | 'DELETE';
export declare function get(url: string, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function post(url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function put(url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
export declare function remove(url: string, body: object, options?: FetchOptions, parameters?: FetchParameters): Promise<any>;
//# sourceMappingURL=fetch.d.ts.map