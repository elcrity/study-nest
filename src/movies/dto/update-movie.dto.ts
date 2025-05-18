/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDTO } from "./create-movie.dto";

/* eslint-disable prettier/prettier */
export class UpdateMovieDTO extends PartialType(CreateMovieDTO){}