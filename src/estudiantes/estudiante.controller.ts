import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Roles } from '../common/decorators/roles.decorator';
import { Role } from '../common/enums/role.enum';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';

@ApiTags('Estudiante')
@ApiBearerAuth()
@Controller('estudiante')
export class EstudianteController {
  constructor(
    private readonly estudianteService: EstudianteService,
  ) {}

  @Get()
  async findAll() {
    return this.estudianteService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  async create(
    @Body() body: CreateEstudianteDto,
  ) {
      console.log("recibido", body);
    return this.estudianteService.create(body);
  }
}