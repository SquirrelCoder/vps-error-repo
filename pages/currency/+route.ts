import { resolveRoute } from 'vite-plugin-ssr/routing';
import { RenderErrorPage } from 'vite-plugin-ssr/RenderErrorPage';

export default route;

// We use a Route Function to implement advanced routing logic
function route(pageContext: { urlPathname: string }) {
  const result = resolveRoute('/c/@enteredAmount', pageContext.urlPathname);

  if (!result.match) {
    return false
  }

  const { enteredAmount } = result.routeParams;

  if (!enteredAmount) {
    throw RenderErrorPage();
  }

  return { routeParams: { enteredAmount } };
}