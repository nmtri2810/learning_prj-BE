import { IsString } from 'class-validator';
import { User } from 'src/modules/users/entities/user.entity';

export class CreateMessageDto {
  user: User;

  @IsString()
  body: string;
}
