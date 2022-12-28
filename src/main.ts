import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        allowedHeaders: ["content-type"],
        origin: "https://react-eth-metamask-signatures-dwarfknights.vercel.app",
        credentials: true,
    });
    app.useGlobalPipes(
        new ValidationPipe({ forbidUnknownValues: false, transform: true })
    );
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
