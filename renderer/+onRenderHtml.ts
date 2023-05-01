// https://vite-plugin-ssr.com/onRenderHtml
import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { getPageTags } from "./getPageTags";

export default onRenderHtml

async function onRenderHtml(pageContext: PageContextBuiltIn & PageContext) {
  const { app, store } = createApp(pageContext);

  const stream = await renderToNodeStream(app);
  const initialStoreState = store.state.value;

  const { title, description, robots } = getPageTags(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
       <title>${ title }</title>
        <meta name="description" content="${ description }" />
        <meta name="robots" content="${ robots }" />
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