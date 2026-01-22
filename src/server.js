import "dotenv/config";
import "#config/validateEnv.js";
import { createApp } from "./app.js";
import { connectMongo, disconnectMongo } from "#infra/database/mongo.connection.js";
import { logger } from "#shared/utils/logger.js";

const PORT = process.env.PORT || 3001;

let server;

process.on("uncaughtException", (err) => {
    logger.fatal(
        {
            message: err.message,
            stack: err.stack,
        },
        "Uncaught Exception"
    );

    process.exit(1);
});

process.on("unhandledRejection", async (reason) => {
    logger.fatal(
        { reason },
        "Unhandled Promise Rejection"
    );

    if (server) {
        server.close(async () => {
            await disconnectMongo();
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
});

const startServer = async () => {
    try {
        await connectMongo();

        const app = createApp();

        server = app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (err) {
        logger.fatal(
            {
                message: err.message,
                stack: err.stack,
            },
            "Failed to start server"
        );
        process.exit(1);
    }
};

await startServer();

const shutdown = async (signal) => {
    logger.info(`Received ${signal}. Shutting down gracefully...`);

    if (server) {
        server.close(async () => {
            await disconnectMongo();
            logger.info("HTTP server & DB connections closed");
            process.exit(0);
        });
    } else {
        process.exit(0);
    }
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
