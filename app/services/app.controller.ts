import { Injectable } from "@decorators/di";
import { Controller, Get, Res } from "@decorators/express";
import { AppService } from "./app.service";
import { Response } from "express";

@Injectable()
@Controller("/")
export class AppController {
	constructor(private readonly appService: AppService) {}
	@Get("/")
	index(@Res() res: Response) {
		const user= this.appService.index();
		return res.render("index",{user});
	}
}
