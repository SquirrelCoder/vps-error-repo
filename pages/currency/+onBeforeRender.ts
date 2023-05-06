import { CurrencyDetail } from "./types";
import type { PageContextBuiltIn } from 'vite-plugin-ssr/types';
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

export default onBeforeRender;

async function onBeforeRender(pageContext: PageContextBuiltIn) {
  const { enteredAmount } = pageContext.routeParams;
  const { from, to } = pageContext.urlParsed.search;

  if (!from || !to) {
    throw RenderErrorPage({
      pageContext: {
        pageProps: {
          errorInfo: 'You have to provide to or from in the query url params!',
        },
      },
    });
  }

  const response = await fetch(`https://api.frankfurter.app/latest?amount=${ enteredAmount }&from=${ from }&to=${ to }`);
  const { amount, base, date, rates } = (await response.json()) as CurrencyDetail;

  return {
    pageContext: {
      pageProps: {
        amount,
        base,
        date,
        rates,
      },
      title: `Converting EUR to USD` ,
      description: `Converting ${ base } in the amount of ${ amount } to USD which is ${ rates.USD }`,
      robots: "noindex, nofollow",
    },
  };
}