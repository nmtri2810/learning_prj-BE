import { Injectable } from '@nestjs/common';
import { ChatRoom } from './entities/chat-room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChatRoomsService {
  constructor(
    @InjectRepository(ChatRoom)
    private chatRoomsRepository: Repository<ChatRoom>,
  ) {}

  async findOne(id: number): Promise<ChatRoom> {
    return await this.chatRoomsRepository
      .createQueryBuilder('chatRoom')
      .where('chatRoom.id = :id', { id })
      .getOne();
  }
}
