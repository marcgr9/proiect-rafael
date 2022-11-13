import * as React from 'react';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ProductsGrid from './components/products-grid';
import Searchbar from './components/search-bar';
import Product, { Category } from './model/product';
import './utils/utils'
import Combobox from 'react-widgets/Combobox';
import "react-widgets/styles.css";

import "./index.css"

export default function App() {
    const allProducts: Product[] = [
        {
            title: "ma ta",
            price: 1,
            picturePath: "./img/poza.jpg",
            category: Category.BERE,
        },
        {
            title: "rafael",
            price: 1,
            picturePath: "./img/poza.jpg",
            category: Category.BERE,
        },
        {
            title: "cacat",
            price: 1,
            picturePath: "./img/poza.jpg",
            category: Category.WHISKEY,
        },
        {
            title: "cacat bere",
            price: 1,
            picturePath: "./img/poza.jpg",
            category: Category.BERE,
        },
        {
            title: "pula",
            price: 1,
            picturePath: "./img/poza.jpg",
            category: undefined,
        },
        {
            title: "pula fara categorie",
            price: 1,
            picturePath: "./img/poza.jpg",
        },
    ]
    
    const [products, setProducts] = useState<Product[]>(allProducts)
    const [category, setCategory] = useState<Category>()
    const [terms, setTerms] = useState<string[]>([])

    useEffect(() => {
        setProducts(
            [...allProducts.filter(product =>
                    (!terms.length || product.title.includesAny(terms)) &&
                    (!category || !product.category || product.category == category)
                )
            ]
        )
    }, [category, terms])

    return (
        <div className="content-container">
            <Searchbar
                onSearch={(terms: string[], raw: string) => setTerms(terms)}
            />
            <div className="cacat-de-combobox-container">
                <Combobox
                    hideCaret
                    data={Object.values(Category)}
                    placeholder="Select a category"
                    onSelect={(category) => {
                        setCategory(category as Category)
                    }}
                    onChange={value => !value && setCategory(undefined)}
                />
            </div>
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
