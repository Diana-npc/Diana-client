import type React from "react"

interface ICard {
    image: string,
    brand: string,
    price: string,
    product: string
}

const Card: React.FC<ICard> = ({
    image,
    brand,
    price,
    product
}) => {
    return (
        <>
            <div className="New__Products_item">

                <img src={image} alt="" />

                <div className="brand">
                    <h4>{brand}</h4>
                    <h4 className="Brand__Name_price">{price}</h4>
                </div>
                <div className="text">
                    <p>{product}</p>
                    <a href="#">colors available</a>
                </div>

            </div>
        </>
    )
}

export default Card