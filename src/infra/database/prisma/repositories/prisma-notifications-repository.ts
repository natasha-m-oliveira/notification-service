import { Injectable } from '@nestjs/common';
import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    id,
    content,
    category,
    recipientId,
    readAt,
    createdAt,
  }: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id,
        content: content.value,
        category,
        recipientId,
        readAt,
        createdAt,
      },
    });
  }
}
