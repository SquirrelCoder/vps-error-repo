export default onBeforeRender;

import type { MovieDetails } from './types';
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const response = await fetch(`https://star-wars.brillout.com/api/films/${ pageContext.routeParams.searchQuery }.json`);
  let movie = (await response.json()) as MovieDetails;

  const { episode_id, title, release_date, director, producer } = movie;

  return {
    pageContext: {
      pageProps: {
        episode_id,
        title,
        release_date,
        director,
        producer,
      },
      title: title,
      description: producer,
      robots: "noindex, nofollow",
    },
  };
}