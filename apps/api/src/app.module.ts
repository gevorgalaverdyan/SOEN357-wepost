import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryController } from 'src/delivery/delivery.controller';
import { DeliveryModule } from 'src/delivery/delivery.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';

@Module({
  imports: [
    UserModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://pew:marioisgay@postify.u68njdx.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp',
    ),
    DeliveryModule,
  ],
  controllers: [AppController, DeliveryController],
  providers: [AppService],
})
export class AppModule {}
