import styles from './SearchBar.module.css'
import React, { useState } from "react";

function SearchBar(placeholder, data) {

    const handleFilter = (event) => {
        const searchWord = event.target.value
    }

    return (
        <div className={styles.search}>
            <div className={styles.searchInputs}>
                <input
                    name="text"
                    type="text"
                    placeholder={placeholder.ph}
                />
                <div className={styles.searchIcon}><button>🔍︎</button></div>
            </div>
        </div>
    )
}

export default SearchBar