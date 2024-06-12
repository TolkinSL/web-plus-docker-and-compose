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
import { WishlistsService } from './wishlists.service';
import { Wishlist } from './entities/wishlist.entity';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { RequestOwnUser } from 'src/users/users.controller';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('wishlistlists')
export class WishlistsController {
  constructor(private readonly wishlistsService: WishlistsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getWishlists(@Request() req: RequestOwnUser): Promise<Wishlist[]> {
    return await this.wishlistsService.getWishlists(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createWishlists(
    @Request() req: RequestOwnUser,
    @Body() createWishlistDto: CreateWishlistDto,
  ): Promise<Wishlist> {
    return await this.wishlistsService.createWishlists(
      req.user,
      createWishlistDto,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getWishlist(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
  ): Promise<Wishlist> {
    return await this.wishlistsService.getWishlist(req.user, +id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async removeWishlist(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
  ): Promise<Wishlist> {
    return await this.wishlistsService.removeWishlist(req.user, +id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateWishlist(
    @Request() req: RequestOwnUser,
    @Param('id') id: string,
    @Body() updateWishlistDto: UpdateWishlistDto,
  ): Promise<Wishlist> {
    return await this.wishlistsService.updateWishlist(
      req.user,
      +id,
      updateWishlistDto,
    );
  }
}
