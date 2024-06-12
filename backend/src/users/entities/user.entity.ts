import { IsNotEmpty, IsString, Length, IsEmail, IsUrl } from 'class-validator';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
import { Offer } from 'src/offers/entities/offer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Length(2, 30)
  @IsNotEmpty()
  @IsString()
  @Column({ unique: true })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ unique: true, select: false })
  email: string;

  @IsNotEmpty()
  @IsString()
  @Column({ select: false })
  password: string;

  @Length(2, 200)
  @IsString()
  @Column({ default: 'Пока ничего не рассказал о себе' })
  about: string;

  @IsUrl()
  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlists: Wishlist[];

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];
}
