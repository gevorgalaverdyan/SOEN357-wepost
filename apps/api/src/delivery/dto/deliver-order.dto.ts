import { IsNotEmpty, IsNotEmptyObject, IsPositive } from 'class-validator';

class CreatePackageDto {
  @IsNotEmpty()
  @IsPositive()
  width: number;

  @IsNotEmpty()
  @IsPositive()
  height: number;

  @IsNotEmpty()
  @IsPositive()
  length: number;

  @IsNotEmpty()
  @IsPositive()
  weight: number;
}

class CreateAddressDto {
  @IsNotEmpty()
  street: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  postalCode: string;
}

export class CreateDeliveryOrderDto {
  @IsNotEmptyObject()
  package: CreatePackageDto;

  @IsNotEmptyObject()
  address: CreateAddressDto;

  @IsNotEmpty()
  userId: string;
}
