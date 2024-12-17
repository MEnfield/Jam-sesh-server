import { ForbiddenException, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { Users as User } from 'src/entities/Users';
import { JwtService } from 'src/jwt/jwt.service';

type CreateUserResponsePayload = {
  user: User;
  token: string;
};
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    const foundUser = this.userRepository.findOne({ where: { userId: id } });

    if (!foundUser) {
      throw new ForbiddenException(`User with id ${id} not found`);
    }

    return foundUser;
  }

  async findOneByEmailOrUsername(entry: string): Promise<User> {
    const foundUser = this.userRepository.findOne({
      where: [
        {
          email: ILike(`%${entry}%`),
        },
        { username: ILike(`%${entry}%`) },
      ],
    });

    if (!foundUser) {
      throw new ForbiddenException(`User with entry ${entry} not found`);
    }

    return foundUser;
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<CreateUserResponsePayload> {
    const { password, ...rest } = createUserDto;

    // Generate a salt and hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await this.userRepository.create({ ...rest, passwordHash });

    return await this.userRepository.save(user).then((user) => ({
      user,
      token: this.jwtService.createTokenFromUser(user),
    }));
  }
}
