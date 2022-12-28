import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { configValidationSchema } from "src/helper/config.schema";
import { DataSource } from "typeorm";

@Module({
    imports: [
        UserModule,
        ConfigModule.forRoot({
            envFilePath: [`.env`],
            validationSchema: configValidationSchema,
            expandVariables: true,
        }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            dataSourceFactory: async (options) => new DataSource(options),
            useFactory: async (configService: ConfigService) => ({
                autoLoadEntities: true,
                synchronize: true,
                type: "postgres",
                host: configService.get("DB_HOST"),
                port: configService.get("DB_PORT"),
                username: configService.get("DB_USERNAME"),
                password: configService.get("DB_PASSWORD"),
                database: configService.get("DB_DATABASE"),
            }),
        }),
    ],
})
export class AppModule {}
