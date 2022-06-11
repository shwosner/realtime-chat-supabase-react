import PostgrestTransformBuilder from './PostgrestTransformBuilder';
/**
 * Filters
 */
declare type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'is' | 'in' | 'cs' | 'cd' | 'sl' | 'sr' | 'nxl' | 'nxr' | 'adj' | 'ov' | 'fts' | 'plfts' | 'phfts' | 'wfts' | 'not.eq' | 'not.neq' | 'not.gt' | 'not.gte' | 'not.lt' | 'not.lte' | 'not.like' | 'not.ilike' | 'not.is' | 'not.in' | 'not.cs' | 'not.cd' | 'not.sl' | 'not.sr' | 'not.nxl' | 'not.nxr' | 'not.adj' | 'not.ov' | 'not.fts' | 'not.plfts' | 'not.phfts' | 'not.wfts';
export default class PostgrestFilterBuilder<T> extends PostgrestTransformBuilder<T> {
    /**
     * Finds all rows which doesn't satisfy the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */
    not(column: keyof T, operator: FilterOperator, value: any): this;
    /**
     * Finds all rows satisfying at least one of the filters.
     *
     * @param filters  The filters to use, separated by commas.
     * @param foreignTable  The foreign table to use (if `column` is a foreign column).
     */
    or(filters: string, { foreignTable }?: {
        foreignTable?: string;
    }): this;
    /**
     * Finds all rows whose value on the stated `column` exactly matches the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    eq(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value on the stated `column` doesn't match the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    neq(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value on the stated `column` is greater than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    gt(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value on the stated `column` is greater than or
     * equal to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    gte(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value on the stated `column` is less than the
     * specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    lt(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value on the stated `column` is less than or equal
     * to the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    lte(column: keyof T, value: T[keyof T]): this;
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case sensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */
    like(column: keyof T, pattern: string): this;
    /**
     * Finds all rows whose value in the stated `column` matches the supplied
     * `pattern` (case insensitive).
     *
     * @param column  The column to filter on.
     * @param pattern  The pattern to filter with.
     */
    ilike(column: keyof T, pattern: string): this;
    /**
     * A check for exact equality (null, true, false), finds all rows whose
     * value on the stated `column` exactly match the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    is(column: keyof T, value: boolean | null): this;
    /**
     * Finds all rows whose value on the stated `column` is found on the
     * specified `values`.
     *
     * @param column  The column to filter on.
     * @param values  The values to filter with.
     */
    in(column: keyof T, values: T[keyof T][]): this;
    /**
     * Finds all rows whose json, array, or range value on the stated `column`
     * contains the values specified in `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    contains(column: keyof T, value: string | T[keyof T][] | object): this;
    /** @deprecated Use `contains()` instead. */
    cs: (column: keyof T, value: string | T[keyof T][] | object) => this;
    /**
     * Finds all rows whose json, array, or range value on the stated `column` is
     * contained by the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    containedBy(column: keyof T, value: string | T[keyof T][] | object): this;
    /** @deprecated Use `containedBy()` instead. */
    cd: (column: keyof T, value: string | T[keyof T][] | object) => this;
    /**
     * Finds all rows whose range value on the stated `column` is strictly to the
     * left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeLt(column: keyof T, range: string): this;
    /** @deprecated Use `rangeLt()` instead. */
    sl: (column: keyof T, range: string) => this;
    /**
     * Finds all rows whose range value on the stated `column` is strictly to
     * the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeGt(column: keyof T, range: string): this;
    /** @deprecated Use `rangeGt()` instead. */
    sr: (column: keyof T, range: string) => this;
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the left of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeGte(column: keyof T, range: string): this;
    /** @deprecated Use `rangeGte()` instead. */
    nxl: (column: keyof T, range: string) => this;
    /**
     * Finds all rows whose range value on the stated `column` does not extend
     * to the right of the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeLte(column: keyof T, range: string): this;
    /** @deprecated Use `rangeLte()` instead. */
    nxr: (column: keyof T, range: string) => this;
    /**
     * Finds all rows whose range value on the stated `column` is adjacent to
     * the specified `range`.
     *
     * @param column  The column to filter on.
     * @param range  The range to filter with.
     */
    rangeAdjacent(column: keyof T, range: string): this;
    /** @deprecated Use `rangeAdjacent()` instead. */
    adj: (column: keyof T, range: string) => this;
    /**
     * Finds all rows whose array or range value on the stated `column` overlaps
     * (has a value in common) with the specified `value`.
     *
     * @param column  The column to filter on.
     * @param value  The value to filter with.
     */
    overlaps(column: keyof T, value: string | T[keyof T][]): this;
    /** @deprecated Use `overlaps()` instead. */
    ov: (column: keyof T, value: string | T[keyof T][]) => this;
    /**
     * Finds all rows whose text or tsvector value on the stated `column` matches
     * the tsquery in `query`.
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     * @param type  The type of tsquery conversion to use on `query`.
     */
    textSearch(column: keyof T, query: string, { config, type, }?: {
        config?: string;
        type?: 'plain' | 'phrase' | 'websearch' | null;
    }): this;
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` instead.
     */
    fts(column: keyof T, query: string, { config }?: {
        config?: string;
    }): this;
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * plainto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'plain'` instead.
     */
    plfts(column: keyof T, query: string, { config }?: {
        config?: string;
    }): this;
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * phraseto_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'phrase'` instead.
     */
    phfts(column: keyof T, query: string, { config }?: {
        config?: string;
    }): this;
    /**
     * Finds all rows whose tsvector value on the stated `column` matches
     * websearch_to_tsquery(`query`).
     *
     * @param column  The column to filter on.
     * @param query  The Postgres tsquery string to filter with.
     * @param config  The text search configuration to use.
     *
     * @deprecated Use `textSearch()` with `type: 'websearch'` instead.
     */
    wfts(column: keyof T, query: string, { config }?: {
        config?: string;
    }): this;
    /**
     * Finds all rows whose `column` satisfies the filter.
     *
     * @param column  The column to filter on.
     * @param operator  The operator to filter with.
     * @param value  The value to filter with.
     */
    filter(column: keyof T, operator: FilterOperator, value: any): this;
    /**
     * Finds all rows whose columns match the specified `query` object.
     *
     * @param query  The object to filter with, with column names as keys mapped
     *               to their filter values.
     */
    match(query: Record<string, unknown>): this;
}
export {};
//# sourceMappingURL=PostgrestFilterBuilder.d.ts.map