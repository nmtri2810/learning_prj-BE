import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { ChatRoomsService } from './chat-room.service';
import { ChatRoomsController } from './chat-room.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './entities/chat-room.entity';

@Module({
  providers: [ChatGateway, ChatRoomsService],
  controllers: [ChatRoomsController],
  imports: [TypeOrmModule.forFeature([ChatRoom])],
})
export class ChatModule {}
