import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly movieService: MoviesService) { }

    @Get()
    getAllMovies(): Movie[] {
        return this.movieService.getAll()
    }

    @Get('search')
    search(@Query('year') searchingYear: string) {
        return ''
    }

    @Get('/:id')
    getOneMovies(@Param('id') id : string): Movie {
        return this.movieService.getOne(id);
    }

    @Post()
    createMovie(@Body() movieData) {
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    removeMovie(@Param('id') id : string) {
        return `This will remove a movie with the id ${id}`
    }

    @Patch('/:id')
    patchMovie(@Param('id') id: string, @Body() updateData) {
        return {
            updatedMovie: id,
            ...updateData
        }
    }
}
