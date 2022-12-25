import React, { useState } from 'react';
import emojilist from './EmojiList.json';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar(props){
    const [searchText, setSearchText]=useState("");

    function onType(event){
        const {value}=event.target;
        setSearchText((prevText)=>value);
        const filteredEmojiList=emojilist.filter((emoji)=>{
            return emoji.title.toLowerCase().includes(value.toLowerCase()) || emoji.keywords.includes(value.toLowerCase());
        }).slice(0,30);
        props.results(filteredEmojiList);
    }

    function onSearch(event){
        const filteredEmojiList=emojilist.filter((emoji)=>{
            return emoji.title.toLowerCase().includes(searchText.toLowerCase()) || emoji.keywords.includes(searchText.toLowerCase());
        });
        props.results(filteredEmojiList);
        event.preventDefault();
    }

    return (
        <form className='search'>
            <input onChange={onType} className='search-bar' type="text" value={searchText} />
            <button onClick={onSearch} className='search-btn'><SearchIcon className="search-icon" /></button>
        </form>
    );
}

export default SearchBar;