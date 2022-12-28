import { Module } from "@nestjs/common";
import { UserController } from "src/user/user.controller";
import { UserService } from "src/user/user.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Req, User } from "src/user/user.entity";

@Module({
    imports: [ConfigModule, TypeOrmModule.forFeature([User, Req])],
    controllers: [UserController],
    providers: [UserService, ConfigService],
    exports: [UserService],
})
export class UserModule {}
