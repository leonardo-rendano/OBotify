import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaService';
import { CreateMusicDTO } from './dtos/create-music.dto';
import { UpdateMusicDTO } from './dtos/update-music.dto';

@Injectable()
export class MusicsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMusicDTO) {
    const musicCreated = await this.prisma.music.create({
      data: data,
    });

    return musicCreated;
  }

  async getAllMusicsList() {
    const musicsList = await this.prisma.music.findMany({
      select: {
        id: true,
        title: true,
        author: true,
        releaseDate: true,
        keywords: true,
      },
    });

    return musicsList;
  }

  async deleteMusicByid(id: string) {
    const deletedMusic = await this.prisma.music.delete({
      where: {
        id: id,
      },
    });

    return deletedMusic;
  }

  async updateMusicByid(id: string, musicUpdatedData: UpdateMusicDTO) {
    const updatedMusic = await this.prisma.music.update({
      where: {
        id: id,
      },
      data: {
        id: musicUpdatedData.id,
        title: musicUpdatedData.title,
        author: musicUpdatedData.author,
        releaseDate: musicUpdatedData.releaseDate,
        keywords: musicUpdatedData.keywords,
      },
    });

    return updatedMusic;
  }

  async findMusicByDynamicValue(musicInfo: string) {
    const musicFound = await this.prisma.music.findMany({
      where: {
        OR: [
          {
            title: musicInfo,
          },
          {
            author: musicInfo,
          },
        ],
      },
    });

    return musicFound;
  }
}
