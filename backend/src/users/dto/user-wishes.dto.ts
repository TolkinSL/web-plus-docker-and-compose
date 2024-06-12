import { IsNumber, IsDate, Min, IsArray } from 'class-validator';
import { CreateWishDto } from 'src/wishes/dto/create-wish.dto';
import { Offer } from 'src/offers/entities/offer.entity';

export class CreateUserDto extends CreateWishDto {
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  @Min(1)
  raised: number;

  @IsNumber()
  copied: number;

  @IsArray()
  offers: Offer[];
}
