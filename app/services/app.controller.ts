import { Injectable } from "@decorators/di";
import { Controller, Get, Params, Res } from "@decorators/express";
import { AppService } from "./app.service";
import { Response } from "express";

@Injectable()
@Controller("/")
export class AppController {
	constructor(private readonly appService: AppService) {}
	@Get("/")
	index(@Res() res: Response) {
		const user= this.appService.index();
		return res.render("web/index",{user});
	}
	@Get("/:id")
	show(@Params("id") id:string) {
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log(id);
		
	}
}
