// import card from "../cards/card.ts"
// import Card from "./../cards/Card.tsx"

import card from "../cards/card"
import CardList from "../cards/CardList"
import Counter from "../cards/Counter"

const Home = () => {
// const {image, brand, price, product} = card
    return(
        <>
        <Counter/>
        привет
        <CardList cards={card} />
        {/* <Card image={image} brand={brand} price={price} product={product} /> */}
        </>
    )
}

export default Home