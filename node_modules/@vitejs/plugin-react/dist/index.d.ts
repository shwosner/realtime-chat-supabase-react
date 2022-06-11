import type { ParserOptions } from '@babel/core';
import type { PluginOption } from 'vite';
import type { TransformOptions } from '@babel/core';

export declare interface Options {
    include?: string | RegExp | Array<string | RegExp>;
    exclude?: string | RegExp | Array<string | RegExp>;
    /**
     * Enable `react-refresh` integration. Vite disables this in prod env or build mode.
     * @default true
     */
    fastRefresh?: boolean;
    /**
     * Set this to `"automatic"` to use [vite-react-jsx](https://github.com/alloc/vite-react-jsx).
     * @default "automatic"
     */
    jsxRuntime?: 'classic' | 'automatic';
    /**
     * Control where the JSX factory is imported from.
     * This option is ignored when `jsxRuntime` is not `"automatic"`.
     * @default "react"
     */
    jsxImportSource?: string;
    /**
     * Babel configuration applied in both dev and prod.
     */
    babel?: TransformOptions;
    /**
     * @deprecated Use `babel.parserOpts.plugins` instead
     */
    parserPlugins?: ParserOptions['plugins'];
}

declare function viteReact(opts?: Options): PluginOption[];

declare namespace viteReact {
    var preambleCode: string;
}
export default viteReact;

export { }
