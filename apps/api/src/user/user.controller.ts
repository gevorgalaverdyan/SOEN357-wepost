import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Request,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { AuthGuard, PrivilegeGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(PrivilegeGuard) -> admin should only be created by admin
  @Post('admin')
  createAdmin(@Body() createUserDto: CreateUserDto) {
    return this.userService.createAdmin(createUserDto);
  }

  // @UseGuards(PrivilegeGuard) -> employee should only be created by admin
  @Post('employee')
  createEmployee(@Body() createUserDto: CreateUserDto) {
    return this.userService.createEmployee(createUserDto);
  }

  @Post('customer')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // @UseGuards(PrivilegeGuard)
  @Get('users')
  findAll() {
    return this.userService.findAll();
  }

  // @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return this.userService.getProfile(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  // @UseGuards(PrivilegeGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }

  @Patch(':id')
  updatePassword(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }
}
