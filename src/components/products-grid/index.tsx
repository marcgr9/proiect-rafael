import React from 'react'
import Product from '../../model/product'
import Card from '../card'

import './index.css'

interface ProductsGridProps {
    products: Product[]
}

function ProductsGrid({ products }: ProductsGridProps) {
    return (
        <div className="products-grid">
            {
                products.map(product => 
                    <Card
                        key={`${product.title}-${product.price}-${product.picturePath}`}
                        product={product}
                    />
                )
            }
        </div>
    )
}

export default ProductsGrid
