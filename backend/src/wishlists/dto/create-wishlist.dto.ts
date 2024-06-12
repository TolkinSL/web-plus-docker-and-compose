import { IsNumber, IsOptional, IsUrl } from 'class-validator';

export class CreateWishlistDto {
  @IsOptional()
  name: string;

  @IsOptional()
  @IsNumber({}, { each: true })
  itemsId: number[];

  @IsOptional()
  @IsUrl()
  image: string;
}
