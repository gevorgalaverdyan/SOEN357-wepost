import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDeliveryOrderDto } from './dto/deliver-order.dto';
import DeliveryOrderModel, {
  DeliveryOrder,
} from './entities/deliver-order.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DeliveryService {
  public async createDelivery(createDeliveryOrderDto: CreateDeliveryOrderDto) {
    const r = await DeliveryOrderModel.create(
      this.buildDeliveryOrder(createDeliveryOrderDto),
    );
    return r;
  }

  private buildDeliveryOrder(
    deliveryOrderDto: CreateDeliveryOrderDto,
  ): DeliveryOrder {
    const { package: deliveryPackage, address, userId } = deliveryOrderDto;
    return {
      package: [
        {
          weight: deliveryPackage.weight,
          height: deliveryPackage.height,
          width: deliveryPackage.width,
          length: deliveryPackage.length,
        },
      ],
      address: {
        street: address.street,
        city: address.city,
        state: address.state,
        postalCode: address.postalCode,
        country: address.country,
      },
      userId: userId,
      trackingId: uuidv4(),
    } as DeliveryOrder;
  }

  public async findOne(id: string): Promise<DeliveryOrder | undefined> {
    return DeliveryOrderModel.findOne({ trackingId: id });
  }

  public async findAllUserDeliveries(
    userId: string,
  ): Promise<DeliveryOrder[] | undefined> {
    return DeliveryOrderModel.find({ userId });
  }

  public async updateDeliveryStatus(
    id: string,
    status: string,
  ): Promise<DeliveryOrder | undefined> {
    const delivery = await DeliveryOrderModel.findOne({ trackingId: id });
    if (!delivery) {
      throw new NotFoundException('User not found');
    }
    delivery.status = status;
    await delivery.save();
    return delivery;
  }
}
