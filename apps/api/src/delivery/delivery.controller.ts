import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import {
  CreateDeliveryOrderDto,
  UpdateDeliveryStatusDto,
} from './dto/deliver-order.dto';
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

  @HttpCode(HttpStatus.OK)
  @HttpCode(HttpStatus.FORBIDDEN)
  @Patch(':id')
  updateDeliveryStatus(
    @Param('id') id: string,
    @Body() status: UpdateDeliveryStatusDto,
  ) {
    return this.deliveryService.updateDeliveryStatus(id, status.status);
  }
}
