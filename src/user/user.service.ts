import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './user.create.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**
   * Получает или создает пользователя по telegramId
   *
   * @param userDto информация о пользователе
   * @returns внутренний пользователь бота
   */
  async getOrCreateUserByTgId(userDto: UserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({
      telegramId: userDto.telegramId,
    });
    if (!user) {
      const user = new User();
      user.telegramId = userDto.telegramId;
      user.firstName = userDto.firstName;
      user.lastName = userDto.lastName;
      user.username = userDto.username;
      user.createdAt = new Date();

      return this.userRepository.save(user);
    }
    return user;
  }

  /**
   * Возвращает пользователя по его идентификатору
   *
   * @param userId идентификатор пользователя
   * @returns пользователь
   */
  async getUserById(userId: number): Promise<User> {
    return await this.userRepository.findOneBy({ id: userId });
  }

  async getUsersByUserIds(userIds: Set<number>): Promise<User[]> {
    const users = [];
    for (const userId of userIds) {
      users.push(await this.getUserById(userId));
    }
    return users;
  }

  /**
   * Возвращает счетчик зарегистрированных пользователей в боте
   *
   * @returns счетчик пользователей
   */
  async getUsersCount(): Promise<number> {
    return await this.userRepository.count();
  }
}
