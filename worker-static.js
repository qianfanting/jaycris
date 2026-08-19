/** Serve the existing static portfolio through Sites' asset binding. */
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }
    const response = await env.ASSETS.fetch(new Request(url, request));
    if (response.status === 404 && !url.pathname.includes(".")) {
      return env.ASSETS.fetch(new Request(new URL("/index.html", request.url), request));
    }
    return response;
  },
};
