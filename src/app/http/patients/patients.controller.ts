import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('patients')
export class PatientsController {
  constructor(
    @Inject('PATIENTS')
    private readonly client: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  @Get()
  async getHello(): Promise<any> {
    this.client.emit('patients.create', {});
    return { sent: true };
  }
}
