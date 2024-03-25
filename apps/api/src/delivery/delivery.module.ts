import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import DeliveryOrder from './entities/deliver-order.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Delivery', schema: DeliveryOrder.schema },
    ]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
  exports: [DeliveryService, DeliveryModule],
})
export class DeliveryModule {}
