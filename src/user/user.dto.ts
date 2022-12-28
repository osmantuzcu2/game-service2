import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    id: string;
    @IsNotEmpty()
    userAddress: string;
}

export class ReqDto {
    id: string;
    name?: string;
}
