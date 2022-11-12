import React, { useState } from 'react'

import './index.css'

interface SearchbarProps {
    onSearch: (searchTerms: string[], rawValue: string) => any
}

function Searchbar({ onSearch }: SearchbarProps) {
    const [text, setText] = useState<string>("")

    const getsearchTerms = (): string[] => {
        return text.match(/\b(\w+)\b/g) || []
    }

    return (
        <div className="searchbar">
            <input 
                className="searchbar__input"
                type="text"
                placeholder='Search'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                className="searchbar__button"
                onClick={() => {
                    onSearch(
                        getsearchTerms(),
                        text,
                    )
                }}
            >
                Search
            </button>
        </div>
    )
}

export default Searchbar
