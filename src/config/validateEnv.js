import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "prod"]),
  PORT: z.coerce.number().default(3000),

  MONGO_URI: z.string().url(),

  JWT_SECRET: z.string().min(32),
  JWT_REFRESH_SECRET: z.string().min(32),

  SENTRY_DSN: z.string().url().optional(),
});

export const env = (() => {
  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    console.error("Invalid environment configuration:");
    console.error(parsed.error.format());
    process.exit(1);
  }

  return parsed.data;
})();
