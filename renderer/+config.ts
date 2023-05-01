import type { Config } from 'vite-plugin-ssr/types';
import { onHydrationEnd, onPageTransitionEnd, onPageTransitionStart } from './onPageTransitionHooks';

// https://vite-plugin-ssr.com/config
export default {
  passToClient: [ 'initialStoreState', 'pageProps', 'title', 'description', 'robots' ],
  clientRouting: true,
  prefetchStaticAssets: { when: 'VIEWPORT' },
  onHydrationEnd,
  onPageTransitionStart,
  onPageTransitionEnd,
  // https://vite-plugin-ssr.com/meta
  meta: {
    // Create new config 'title'
    title: {
      env: 'server-and-client'
    },
    description: {
      env: 'server-and-client'
    },
    robots: {
      env: 'server-and-client'
    },
  },
} satisfies Config;