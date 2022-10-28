import Image from 'next/image'
import { FavoriteBorder } from 'styled-icons/material-outlined'
import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
}
const GameCard = ({ title, developer, img, price }: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <Image src={img} alt={title} />
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to wishlist" />
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
    </S.BuyBox>
    <div>teste</div>
  </S.Wrapper>
)

export default GameCard
