import { Body, Delete, Get, Param, Put } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { CreateMusicDTO } from './dtos/create-music.dto';
import { UpdateMusicDTO } from './dtos/update-music.dto';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Post()
  async createMusic(@Body() data: CreateMusicDTO) {
    return this.musicsService.create(data);
  }

  @Get()
  async findAllMusics() {
    return this.musicsService.getAllMusicsList();
  }

  @Delete(':id')
  async deleteMusic(@Param('id') id: string) {
    return this.musicsService.deleteMusicByid(id);
  }

  @Put(':id')
  async updateMusic(
    @Param('id') id: string,
    @Body() musicUpdatedData: UpdateMusicDTO,
  ) {
    return this.musicsService.updateMusicByid(id, musicUpdatedData);
  }

  @Get(':musicInfo')
  async findMusicByAuthorOrTitle(@Param('musicInfo') musicInfo: string) {
    return this.musicsService.findMusicByDynamicValue(musicInfo);
  }
}
