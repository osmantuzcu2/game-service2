import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { CreateUserDto } from "src/user/user.dto";
import { User } from "src/user/user.entity";

@Controller("user")
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    registerWallet(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.registerWallet(createUserDto);
    }
    @Get("/helloWorld")
    helloWorld() {
        return this.userService.helloWorld();
    }
    @Post("/req")
    reqToken(@Body() params) {
        return this.userService.reqToken(params);
    }
    @Get("/:id")
    checkWallet(@Param("id") id: string) {
        return this.userService.checkWallet(id);
    }
}
