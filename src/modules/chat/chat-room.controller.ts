import { Controller, Get, Param } from '@nestjs/common';
import { ChatRoomsService } from './chat-room.service';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private readonly chatRoomsService: ChatRoomsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.chatRoomsService.findOne(+id);
  }
}
