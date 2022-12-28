import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User, Req } from "src/user/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, ReqDto } from "src/user/user.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Req) private reqRepository: Repository<Req>
    ) {}

    async registerWallet(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create({ ...createUserDto });
        return await this.userRepository.save(user);
    }
    helloWorld() {
        console.log("hello world");
        return "hello world";
    }
    async reqToken(reqDto: ReqDto): Promise<Req> {
        const id = await this.reqRepository.create({ ...reqDto });

        return { ...(await this.reqRepository.save(id)), name: undefined };
    }
    async checkWallet(id: string): Promise<string> {
        const found = await this.userRepository.findOne({ where: { id } });
        if (!found) {
            throw new NotFoundException("id not found");
        }
        return JSON.stringify({ userAddress: found.userAddress });
    }
}
