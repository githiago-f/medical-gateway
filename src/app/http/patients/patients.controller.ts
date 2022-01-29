import {
  Controller,
  Get,
  Inject,
  Logger,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('patients')
export class PatientsController implements OnApplicationBootstrap {
  private readonly LOG = new Logger(PatientsController.name);

  constructor(
    @Inject('PATIENTS')
    private readonly client: ClientProxy
  ) {}

  async onApplicationBootstrap() {
    try {
      await this.client.connect();
    } catch(e) {
      this.LOG.error(e);
    }
  }

  @Get()
  async getHello(): Promise<any> {
    this.client.emit('patients.create', {});
    return { sent: true };
  }
}
