import { Module } from "@nestjs/common";
import { MoviesController } from "./movies/movies.controller";
import { MoviesService } from "./movies/movies.service";

// 데코레이터, 클래스에 함수 기능 추가, 클래스 위의 함수, 클래스를 위해 움직임
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
