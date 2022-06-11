import { RealtimeSubscription, RealtimeClient } from '@supabase/realtime-js';
import { SupabaseEventTypes, SupabaseRealtimePayload } from './types';
export declare class SupabaseRealtimeClient {
    subscription: RealtimeSubscription;
    constructor(socket: RealtimeClient, headers: {
        [key: string]: string;
    }, schema: string, tableName: string);
    private getPayloadRecords;
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */
    on(event: SupabaseEventTypes, callback: (payload: SupabaseRealtimePayload<any>) => void): this;
    /**
     * Enables the subscription.
     */
    subscribe(callback?: Function): RealtimeSubscription;
}
//# sourceMappingURL=SupabaseRealtimeClient.d.ts.map