// user.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

// Mock the UserModel
const mockUserModel: Partial<Model<User>> = {
  // Mock any methods or properties used in UserService
  findOne: jest.fn(),
};

describe('UserService', () => {
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken('User'), // Adjust 'User' based on your actual model name
          useValue: mockUserModel,
        },
      ],
    }).compile();

    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });

  // Add more tests based on your specific use cases
});
