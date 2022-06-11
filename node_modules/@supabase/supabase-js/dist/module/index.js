import SupabaseClient from './SupabaseClient';
export * from '@supabase/gotrue-js';
export * from '@supabase/realtime-js';
/**
 * Creates a new Supabase Client.
 */
const createClient = (supabaseUrl, supabaseKey, options) => {
    return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
export { createClient, SupabaseClient, };
//# sourceMappingURL=index.js.map