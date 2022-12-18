import { Notification } from '@app/entities/notification';

// poderia ser uma interface, mas o nest trabalha melhor com classes abstratas por conta da injeção de depedências
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notification: Notification): Promise<void>;
  abstract countManyByRecipietId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
