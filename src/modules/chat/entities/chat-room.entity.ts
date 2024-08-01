import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Chat } from './chat.entity';

@Entity('chatrooms')
export class ChatRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Chat, (chat) => chat.chatRoom)
  messages: Chat[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'chatrooms_users',
    joinColumn: {
      name: 'chatroom_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  users: User[];
}
