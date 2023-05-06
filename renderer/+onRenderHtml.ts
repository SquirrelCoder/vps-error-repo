// https://vite-plugin-ssr.com/onRenderHtml
import { renderToString } from '@vue/server-renderer'
import { dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types'
import { renderHeadToString } from "@vueuse/head";

export default onRenderHtml

async function onRenderHtml(pageContext: PageContextBuiltIn & PageContext) {
  // the following snippet does not work

  // const { app, store, head } = createApp(pageContext);
  // const stream = await renderToNodeStream(app);
  // const initialStoreState = store.state.value;
  // const { title, description, robots } = getPageTags(pageContext);
  // const { headTags } = await renderHeadToString(head)
  //
  // const documentHtml = escapeInject`<!DOCTYPE html>
  //   <html>
  //     <head>
  //       ${ headTags }
  //     </head>
  //     <body>
  //       <div id="app">${ stream }</div>
  //     </body>
  //   </html>`;
  //
  // return {
  //   documentHtml,
  //   pageContext: {
  //     enableEagerStreaming: true,
  //     initialStoreState,
  //   },
  // };

  // the following snippet does work correctly


  const { app, store, head } = createApp(pageContext);
  const { headTags } = await renderHeadToString(head)
  const initialStoreState = store.state.value;
  const appHTML = await renderToString(app)
  const documentHtml = dangerouslySkipEscape(`<!DOCTYPE html>
    <html>
      <head>
      ${ headTags }
    <title>s</title></head>
      <body>
        <div id="app">${ appHTML }</div>
      </body>
    </html>`);
  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
      initialStoreState,
    },
  };
}