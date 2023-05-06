// https://vite-plugin-ssr.com/onRenderHtml
import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { getPageTags } from "./getPageTags";
import { renderHeadToString } from "@vueuse/head";

export default onRenderHtml

async function onRenderHtml(pageContext: PageContextBuiltIn & PageContext) {
  const { app, store, head } = createApp(pageContext);
  const stream = await renderToNodeStream(app);
  const initialStoreState = store.state.value;
  const { headTags } = await renderHeadToString(head)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        ${ headTags }
      </head>
      <body>
        <div id="app">${ stream }</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
      initialStoreState,
    },
  };
}