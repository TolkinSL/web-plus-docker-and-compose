import { OmitType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsNumber, IsDate } from 'class-validator';

export class UserProfileDto extends OmitType(CreateUserDto, [
  'password',
  'email',
] as const) {
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;
}
