import Card from "./../cards/Card.tsx"
import cl from "./style.module.css"
interface ICard {
    image: string,
    brand: string,
    price: string,
    product: string
}

type CardListP = {
    cards: ICard[]
}

const CardList: React.FC<CardListP> = ({cards}) => {
    return(
        <>
        <div className={cl.cards__container}>{cards.map((card, index) => (
        <Card
          key={index}
          brand={card.brand}
          image={card.image}
          price={card.price}
          product={card.product}
        />
      ))}</div>
        
        </>
    )
}
export default CardList