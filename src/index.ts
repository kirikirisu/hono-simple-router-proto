import { Hono } from "hono";
import { serveStatic } from "hono/cloudflare-workers";
import manifest from "__STATIC_CONTENT_MANIFEST";

const app = new Hono();

app.get("/static/*", serveStatic({ root: "./", manifest }));
app.get(
  "/static/spa/*",
  serveStatic({
    root: "./",
    manifest,
    rewriteRequestPath: (path) => "/static/spa",
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
