import { Notification } from '../entities/notification';

// poderia ser uma interface, mas o nest trabalha melhor com classes abstratas por conta da injeção de depedências
export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
