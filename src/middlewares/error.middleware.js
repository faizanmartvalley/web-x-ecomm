import { logger } from "#shared/utils/logger.js";
import * as Sentry from "@sentry/node";

export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const isProd = process.env.NODE_ENV === "prod";

  logger.error({
    traceId: req.traceId,
    message: err.message,
    code: err.code,
    statusCode,
    stack: err.stack,
    route: req.originalUrl,
    method: req.method,
    userId: req.user?.id,
  });

  if (!err.isOperational) {
    Sentry.captureException(err, {
      tags: {
        traceId: req.traceId,
        route: req.originalUrl,
      },
    });
  }

  res.status(statusCode).json({
    success: false,
    code: err.code || "INTERNAL_ERROR",
    message: isProd
      ? "Internal Server Error"
      : err.message,
    traceId: req.traceId,
  });
};