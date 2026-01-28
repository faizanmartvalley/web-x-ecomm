import pino from "pino";

const isProd = process.env.NODE_ENV === "prod";
  
export const logger = pino({
  level: isProd ? "info" : "debug",
  redact: {
    paths: ["req.headers.authorization", "password"],
    censor: "***",
  },
  base: {
    service: "my-api",
  },
});