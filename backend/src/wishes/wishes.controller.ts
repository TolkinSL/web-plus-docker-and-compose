import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
import { Wish } from './entities/wish.entity';
import { RequestOwnUser } from 'src/users/users.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('wishes')
export class WishesController {
  constructor(private readonly wishesService: WishesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createWish(
    @Request() req: RequestOwnUser,
    @Body() createWishDto: CreateWishDto,
  ): Promise<Record<string, never>> {
    await this.wishesService.createWish(createWishDto, req.user.id);
    return {};
  }

  @Get('last')
  async findLastWish(): Promise<Wish[]> {
    return await this.wishesService.findLastWishes();
  }

  @Get('top')
  async findTopWishes(): Promise<Wish[]> {
    return await this.wishesService.findTopWishes();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findWishById(@Request() req: RequestOwnUser, @Param('id') id: string) {
    return await this.wishesService.findWishById(req.user, +id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateWishById(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
    @Body() updateWishDto: UpdateWishDto,
  ): Promise<Record<string, never>> {
    await this.wishesService.updateWishById(req.user, +id, updateWishDto);
    return {};
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/copy')
  async copyWithById(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
  ): Promise<Record<string, never>> {
    await this.wishesService.copyWithById(req.user, +id);
    return {};
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeWishById(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
  ): Promise<Wish> {
    return await this.wishesService.removeWishById(req.user, +id);
  }
}
