import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies() {
        return 'This will return all movies';
    }

    @Get('search')
    search() {
        return ''
    }

    @Get('/:id')
    getOneMovies(@Param('id') id : string) {
        return `This will return one movies with id ${id}`
    }

    @Post()
    createMovie(@Body() movieData) {
        console.log(movieData)
        return movieData
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
