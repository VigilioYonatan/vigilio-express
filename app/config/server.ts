import express from "express";
import path from "path";
import { ERROR_MIDDLEWARE, attachControllers } from "@decorators/express";
import { enviroments } from "~/config/enviroments.config";
import { connectDB } from "~/config/db.config";
import { apiRouters } from "~/routers/api";
import { Container } from "@decorators/di";
import { ServerErrorMiddleware } from "@vigilio/express-core/handler";
import { logger } from "@vigilio/express-core/helpers";
import { client } from "@vigilio/express-core/client";
import { webRouters } from "~/routers/web";

export class Server {
	public readonly app: express.Application = express();

	constructor() {
		this.middlewares();
		this.auth();
		this.routes();
	}

	auth() {
	
	}

	middlewares() {
		this.app.use(express.json());
		this.app.use(express.static(path.resolve(__dirname, "..", "..", "public")));
		this.app.set("view engine", "pug");
		this.app.set(
			"views",
			path.resolve(__dirname, "..", "..", "resources", "views"),
		);
		this.app.use(client());

		connectDB();
	}

	routes() {
		const apiRouter = express.Router();
		const webRouter = express.Router();
		attachControllers(apiRouter, apiRouters);
		attachControllers(webRouter, webRouters);
		Container.provide([
			{ provide: ERROR_MIDDLEWARE, useClass: ServerErrorMiddleware },
		]);
		this.app.use("/", webRouter);
		this.app.use("/api", apiRouter);
	}

	listen() {
		const server = this.app.listen(enviroments.PORT, () => {
			logger.primary(`Run server in port ${enviroments.PORT}`);
		});

		return server;
	}
}
