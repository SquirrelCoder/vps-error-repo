import { resolveRoute } from 'vite-plugin-ssr/routing';
import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';

export default route;

// We use a Route Function to implement advanced routing logic
function route(pageContext: { urlPathname: string }) {
  const result = resolveRoute('/c/@amount', pageContext.urlPathname);

  if (!result.match) {
    return false
  }

  const { amount } = result.routeParams;

  if (!amount) {
    throw RenderErrorPage();
  }

  return { routeParams: { amount } };
}