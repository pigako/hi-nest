import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { CreateMovieDto } from "./dto/create-movie.dto";
import { Movie } from "./entities/movie.entity";
import { MoviesService } from "./movies.service";

@Controller("movies")
export class MoviesController {
    constructor(private readonly movieService: MoviesService) {}

    @Get()
    getAllMovies(): Movie[] {
        return this.movieService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear: string) {
        return "";
    }

    @Get("/:id")
    getOneMovies(@Param("id") id: number): Movie {
        console.log(id);
        console.log(typeof id);
        return this.movieService.getOne(id);
    }

    @Post()
    createMovie(@Body() movieData: CreateMovieDto) {
        return this.movieService.create(movieData);
    }

    @Delete("/:id")
    removeMovie(@Param("id") id: number) {
        return this.movieService.deleteOne(id);
    }

    @Patch("/:id")
    patchMovie(@Param("id") id: number, @Body() updateData) {
        return this.movieService.update(id, updateData);
    }
}
