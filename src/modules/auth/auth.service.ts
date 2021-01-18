import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}

  async validateUser(email: string, typedPassword: string) {
    //find if user exist with this email
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found.');
    }

    //check user password match
    const checkPass = await this.comparePassword(typedPassword, user.password);
    if (!checkPass) {
      throw new UnauthorizedException(`Password doesn't match`);
    }

    const { ...result } = user['dataValues'];
    return result;
  }

  private async comparePassword(typedPassword, savedPassword) {
    const passCheck = await bcrypt.compare(typedPassword, savedPassword);
    return passCheck;
  }
}
