import { randomUUID } from "crypto";

export const requestContext = (req, res, next) => {
  req.traceId = randomUUID();
  res.setHeader("X-Trace-Id", req.traceId);
  next();
};