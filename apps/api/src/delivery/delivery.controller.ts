import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { CreateDeliveryOrderDto } from './dto/deliver-order.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { CatchingPokemon } from '@mui/icons-material';
import { DeliveryOrder } from 'src/delivery/entities/deliver-order.entity';

@Controller('delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  // @UseGuards(AuthGuard)
  @Post(':id')
  createDelivery(@Body() order: CreateDeliveryOrderDto) {
    return this.deliveryService.createDelivery(order);
  }

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  @Get('tracking/:id')
  getDelivery(@Param('id') id: string): Promise<DeliveryOrder> {
    return this.deliveryService.findOne(id);
  }

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  // @UseGuards(AuthGuard)
  @Get(':userId')
  getDeliveries(@Param('userId') id: string) {
    return this.deliveryService.findAllUserDeliveries(id);
  }
}
