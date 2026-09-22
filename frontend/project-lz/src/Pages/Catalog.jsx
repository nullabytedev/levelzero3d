import Card from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import ModelData from "/src/databaseModel.json"
import styles from "./Catalog.module.css";
import React, {useState} from "react";

function Templates() {

    const [searchQuery, setSearchQuery] = useState('');
    const [tagQuery, setTagQuery] = useState('');

    function handleSearch(event) {
        setSearchQuery(event.target.value)
    }

    function GetModels(query, list) {
        if (!searchQuery) {
            return list;
        }
        return list.filter((model) => model.name.includes(query))
    }

    return(
        <>
            {/*
            <div className={styles.queryBars}>
                <div className={styles.searchBar}>
                    <input
                        name="text"
                        type="text"
                        placeholder="Search.."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className={styles.tags}>
                    <input
                        name="text"
                        type="text"
                        placeholder="Tags.."
                    />
                </div>
                <button
                    className={styles.searchButton}
                    onClick={(e) => setSearchQuery(e.target.value)}
                >🔍︎</button>
            </div>
            */}
            <div className={styles.searchBar}>
                <SearchBar ph='Search..'/>
            </div>
            <div className={styles.Cards}>
                {ModelData.map((value) => {
                    return <Card name={value.name} description={value.description} stl={value.files.stl} stp={value.files.stp} f3d={value.files.f3d}/>
                })}
            </div>
        </>
    );
}

export default Templates