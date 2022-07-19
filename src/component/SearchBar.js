import React from 'react'

const SearchBar = ( {onSearch, searchTitle} ) => {
        return (
            <div className='note-app__header'>
                <h1>Note App</h1>
                <div className='note-search'>
                    <input type='text' placeholder='Cari catatan ...' onChange={onSearch} value={searchTitle}/>
                </div>
            </div>
        )
    }

export default SearchBar;