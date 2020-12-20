import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-dto.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
