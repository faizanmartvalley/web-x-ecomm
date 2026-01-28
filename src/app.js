import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import { requestContext } from "#middlewares/requestContext.js";
import authRoutes from "#api/routes/auth.routes.js";
import { errorMiddleware } from "#middlewares/error.middleware.js";
import { responseMiddleware } from "#middlewares/responseMiddleware .js";
import webRoutes from "#web/routes/web.routes.js";

export const createApp = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/public", express.static("public"));

  app.use(requestContext);
  app.use(responseMiddleware);

  nunjucks.configure(path.join(process.cwd(), "src/web/views"), {
    autoescape: true,
    express: app,
  });

  app.set("view engine", "njk");

  app.use("/", webRoutes);
  app.use("/api/v1/auth", authRoutes);

  app.use((req, res) => {
    res.status(404).json({
      success: false,
      code: "ROUTE_NOT_FOUND",
      message: "Route not found",
      traceId: req.traceId,
    });
  });

  app.use(errorMiddleware)

  return app;
};
