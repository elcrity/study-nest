/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res} from "@nestjs/common";

@Controller("movies")
export class MoviesController {
    constructor(private readonly MoviesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        return this.MoviesService.getAll();
    }

    @Get(":id")
    getOne(@Param("id") movieId: number): Movie{
        console.log(typeof(movieId));
        
        return this.MoviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDTO) {
        return this.MoviesService.create(movieData);
    }

    @Delete(":id")
    remove(@Param("id") movieId: number) {
        return this.MoviesService.deleteOne(movieId);
    }

    @Patch(":id")
    patch(@Param(`id`) movieId: number, @Body() upadateData: UpdateMovieDTO) {
        return this.MoviesService.update(movieId, upadateData);
    }

}
