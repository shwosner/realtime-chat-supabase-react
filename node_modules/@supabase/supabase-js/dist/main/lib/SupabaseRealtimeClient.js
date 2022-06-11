"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupabaseRealtimeClient = void 0;
const realtime_js_1 = require("@supabase/realtime-js");
class SupabaseRealtimeClient {
    constructor(socket, headers, schema, tableName) {
        const chanParams = {};
        const topic = tableName === '*' ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
        const userToken = headers['Authorization'].split(' ')[1];
        if (userToken) {
            chanParams['user_token'] = userToken;
        }
        this.subscription = socket.channel(topic, chanParams);
    }
    getPayloadRecords(payload) {
        const records = {
            new: {},
            old: {},
        };
        if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
            records.new = realtime_js_1.Transformers.convertChangeData(payload.columns, payload.record);
        }
        if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
            records.old = realtime_js_1.Transformers.convertChangeData(payload.columns, payload.old_record);
        }
        return records;
    }
    /**
     * The event you want to listen to.
     *
     * @param event The event
     * @param callback A callback function that is called whenever the event occurs.
     */
    on(event, callback) {
        this.subscription.on(event, (payload) => {
            let enrichedPayload = {
                schema: payload.schema,
                table: payload.table,
                commit_timestamp: payload.commit_timestamp,
                eventType: payload.type,
                new: {},
                old: {},
            };
            enrichedPayload = Object.assign(Object.assign({}, enrichedPayload), this.getPayloadRecords(payload));
            callback(enrichedPayload);
        });
        return this;
    }
    /**
     * Enables the subscription.
     */
    subscribe(callback = () => { }) {
        this.subscription.onError((e) => callback('SUBSCRIPTION_ERROR', e));
        this.subscription.onClose(() => callback('CLOSED'));
        this.subscription
            .subscribe()
            .receive('ok', () => callback('SUBSCRIBED'))
            .receive('error', (e) => callback('SUBSCRIPTION_ERROR', e))
            .receive('timeout', () => callback('RETRYING_AFTER_TIMEOUT'));
        return this.subscription;
    }
}
exports.SupabaseRealtimeClient = SupabaseRealtimeClient;
//# sourceMappingURL=SupabaseRealtimeClient.js.map