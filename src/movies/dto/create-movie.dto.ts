/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNumber, IsOptional, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateMovieDTO{
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional()
  @IsString({each:true})
  readonly genres: string[];
}