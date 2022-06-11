import { StorageBucketApi, StorageFileApi } from './lib';
export class SupabaseStorageClient extends StorageBucketApi {
    constructor(url, headers = {}) {
        super(url, headers);
    }
    /**
     * Perform file operation in a bucket.
     *
     * @param id The bucket id to operate on.
     */
    from(id) {
        return new StorageFileApi(this.url, this.headers, id);
    }
}
//# sourceMappingURL=SupabaseStorageClient.js.map