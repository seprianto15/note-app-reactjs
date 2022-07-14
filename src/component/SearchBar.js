import React from 'react'

const SearchBar = ( {onSearch, searchTitle} ) => {
        return (
            <div className='note-app__header'>
                <h1>Note App</h1>
                <div className='note-search'>
                    <input type='text' placeholder='Cari catatan ...' value={searchTitle} onChange={onSearch} />
                </div>
            </div>
        )
    }

export default SearchBar;