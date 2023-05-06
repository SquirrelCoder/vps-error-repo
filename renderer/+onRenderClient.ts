// https://vite-plugin-ssr.com/onRenderClient
import { getPageTags } from "./getPageTags";
import { createApp } from './app';
import type { PageContext } from './types';
import type { PageContextBuiltInClientWithClientRouting as PageContextBuiltInClient } from 'vite-plugin-ssr/types';
import { App } from "vue";

export default onRenderClient;

let app: App<Element> & { changePage: (pageContext: PageContext) => void; };

async function onRenderClient(pageContext: PageContextBuiltInClient & PageContext) {
  if (!app) {
    const instance = createApp(pageContext);
    app = instance.app;

    instance.store.state.value = pageContext.initialStoreState;

    app.mount('#app');
  } else {
    app.changePage(pageContext);
  }

  // set heads
  const { title, description, robots } = getPageTags(pageContext);
  document.title = title;
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", description);
  }

  const robotsMeta = document.querySelector('meta[name="robots"]');
  if (robotsMeta) {
    robotsMeta.setAttribute("content", robots);
  }
}