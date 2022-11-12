import * as React from 'react';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ProductsGrid from './components/products-grid';
import Searchbar from './components/search-bar';
import Product from './model/product';
import './utils/utils'

import "./index.css"

export default function App() {
    const allProducts = [
        {
            title: "ma ta",
            price: 1,
            picturePath: "./img/poza.jpg",
        },
        {
            title: "rafael",
            price: 1,
            picturePath: "./img/poza.jpg",
        },
        {
            title: "cacat",
            price: 1,
            picturePath: "./img/poza.jpg",
        },
        {
            title: "pula",
            price: 1,
            picturePath: "./img/poza.jpg",
        },
    ]
    
    const [products, setProducts] = useState<Product[]>(allProducts)

    return (
        <div className="content-container">
            <Searchbar
                onSearch={(terms: string[], raw: string) => {
                    setProducts(
                        terms.length ?
                            [...allProducts.filter(product =>
                                    product.title.includesAny(terms)
                                )
                            ]
                        : [...allProducts]
                    )
                }}
            />
            <ProductsGrid
                products={products}
            />
        </div>
    )
}


const container = document.getElementById('app');
if (container != null) {
    const root = createRoot(container);
    root.render(<App />);
}
