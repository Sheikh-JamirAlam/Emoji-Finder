import React,{useState} from 'react';
import Heading from './Heading';
import SearchBar from './SearchBar';
import Result from './Result';
import emojilist from './EmojiList.json';

function App(){
    const [resultList,setResultList]=useState(emojilist.slice(0,30));

    function getResults(data){
        setResultList(prevList=>data);
    }

    return (
        <div>
            <Heading />
            <SearchBar results={getResults} />
            <div className='result-container'>
            {
                (resultList !== null) && resultList.map((result,index)=>(<Result key={index} name={result.title} emoji={result.symbol} />))
            }
            </div>
        </div>
    );
}

export default App;