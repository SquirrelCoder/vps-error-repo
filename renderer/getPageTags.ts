export { getPageTags };

function getPageTags(pageContext: {
  config: { title?: string; description?: string; robots?: string; };
  title?: string; description?: string; robots?: string;
}): {
  title: string;
  description: string;
  robots: string;
} {
  const title =
    // For static titles (defined in the `export { documentProps }` of the page's `.page.js`)
    (pageContext.config || {}).title ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext || {}).title ||
    'Demo';

  const description = (pageContext.config || {}).description ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext || {}).description ||
    'Demo';

  const robots = (pageContext.config || {}).robots ||
    // For dynamic tiles (defined in the `export addContextProps()` of the page's `.page.server.js`)
    (pageContext || {}).robots ||
    'Demo';

  return { title, description, robots };
}