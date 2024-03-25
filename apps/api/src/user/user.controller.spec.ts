import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { UserController } from './user.controller';

// Mock the UserModel
const mockUserModel: Partial<Model<User>> = {
  // Mock any methods or properties used in UserService
  findOne: jest.fn(),
};

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getModelToken('User'), // Adjust 'User' based on your actual model name
          useValue: mockUserModel,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
