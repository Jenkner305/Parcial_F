import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty()
  @IsString()
  nombre: string;

  @ApiProperty()
  @IsString()
  codigo: string;
}