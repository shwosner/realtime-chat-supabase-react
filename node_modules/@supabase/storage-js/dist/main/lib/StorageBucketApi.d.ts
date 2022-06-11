import { Bucket } from './types';
export declare class StorageBucketApi {
    protected url: string;
    protected headers: {
        [key: string]: string;
    };
    constructor(url: string, headers?: {
        [key: string]: string;
    });
    /**
     * Retrieves the details of all Storage buckets within an existing product.
     */
    listBuckets(): Promise<{
        data: Bucket[] | null;
        error: Error | null;
    }>;
    /**
     * Retrieves the details of an existing Storage bucket.
     *
     * @param id The unique identifier of the bucket you would like to retrieve.
     */
    getBucket(id: string): Promise<{
        data: Bucket | null;
        error: Error | null;
    }>;
    /**
     * Creates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     * @returns newly created bucket id
     */
    createBucket(id: string, options?: {
        public: boolean;
    }): Promise<{
        data: string | null;
        error: Error | null;
    }>;
    /**
     * Updates a new Storage bucket
     *
     * @param id A unique identifier for the bucket you are creating.
     */
    updateBucket(id: string, options: {
        public: boolean;
    }): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Removes all objects inside a single bucket.
     *
     * @param id The unique identifier of the bucket you would like to empty.
     */
    emptyBucket(id: string): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
    /**
     * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
     * You must first `empty()` the bucket.
     *
     * @param id The unique identifier of the bucket you would like to delete.
     */
    deleteBucket(id: string): Promise<{
        data: {
            message: string;
        } | null;
        error: Error | null;
    }>;
}
//# sourceMappingURL=StorageBucketApi.d.ts.map