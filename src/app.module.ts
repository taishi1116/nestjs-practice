import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthzModule } from './authz/authz.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthzModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
