import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Searchbar from './components/search-bar';

import "./index.css"

export default function App() {

    return (
        <div className="content-container">
            <Searchbar
                onSearch={(terms: string[], raw: string) => {}}
            />
        </div>
    )
}


const container = document.getElementById('app');
if (container != null) {
    const root = createRoot(container);
    root.render(<App />);
}
