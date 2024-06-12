import { IsString, Length, IsUrl, IsNumber, Min } from 'class-validator';

export class CreateWishDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @IsString()
  @Length(1, 1024)
  description: string;

  @IsNumber()
  @Min(1)
  price: number;
}
