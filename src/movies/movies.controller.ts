import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: number) {
    return 'Searching for a movie from year ' + searchingYear;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return 'This will return one movie with id ' + movieId;
  }

  @Post()
  create(@Body('id') movieId: string) {
    return 'This will create a movie with id ' + movieId;
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return 'This will remove a movie with id ' + movieId;
  }

  @Patch(':id')
  update(@Param('id') movieId: string) {
    return 'This will update a movie with id ' + movieId;
  }
}
