import React from 'react'
import Product from '../../model/product'

import './index.css'

interface CardProps {
    product: Product
}

function Card({ product }: CardProps) {
    return (
        <div className="card">
            <img className="card__photo" src={product.picturePath}/>
            <p className="card__title">
                {product.title}
            </p>
            <div className="card__bottom-container">
                <button className="add-to-cart">
                    Add to cart
                </button>
                <p className="price">
                    ${product.price}
                </p>
            </div>
        </div>
    )
}

export default Card
