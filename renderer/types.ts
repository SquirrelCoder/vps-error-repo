import { StateTree } from "pinia";
import type { PageContextBuiltIn, PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types'
import type { ComponentPublicInstance } from 'vue'

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }
export type { Component }

type Component = ComponentPublicInstance // https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086

type Page = Component
type PageProps = Record<string, unknown>

type PageContextCustom = {
  Page: Page;
  pageProps?: PageProps;
  initialStoreState: StateTree;
  config: {
    /** Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
    title?: string;
    description?: string;
    robots?: string;
  };
  /** Title defined dynamically by onBeforeRender() */
  title?: string;
  description?: string;
  robots?: string;
};

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer