import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DbC8tT3D.mjs';
import { manifest } from './manifest_BJfHzj5R.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/proxy.astro.mjs');
const _page3 = () => import('./pages/atom.xml.astro.mjs');
const _page4 = () => import('./pages/open-graph/_---route_.astro.mjs');
const _page5 = () => import('./pages/rss.xml.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const _page7 = () => import('./pages/_---slug_.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.13.10_@netlify+blobs@10.0.10_@types+node@24.5.2_@vercel+functions@2.2.13_jiti@2_3dd93e37e58803c23eccfadc51f5c383/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/proxy.ts", _page2],
    ["src/pages/atom.xml.ts", _page3],
    ["src/pages/open-graph/[...route].ts", _page4],
    ["src/pages/rss.xml.ts", _page5],
    ["src/pages/index.astro", _page6],
    ["src/pages/[...slug].astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "eac92824-54b0-4e4c-ac7d-512b5ed278a4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
