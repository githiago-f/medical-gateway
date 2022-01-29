import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PatientsController } from './http/patients/patients.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PATIENTS',
        transport: Transport.TCP,
        options: {
          host: 'patients',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [PatientsController],
})
export class AppModule {}
