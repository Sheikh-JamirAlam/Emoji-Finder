import React,{useState} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Result(props){
    const codePointHex = props.emoji.codePointAt(0).toString(16);
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

    const [isHovering, setIsHovering] = useState(false);
    const [hasClicked, setHasClicked] = useState(false);

    function handleMouseOver(){
        setIsHovering(true);
    }

    function handleMouseOut(){
        setIsHovering(false);
        setHasClicked(false);
    }

    function handleClick(){
        setHasClicked(true);
    }

    return (
        <CopyToClipboard text={props.emoji}>
            <div className='result-elements' onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={src} alt={props.title} />
                <p className='capitalize result-item'>{props.name}</p>
                {isHovering && <span className='copy-text'>{hasClicked?"Copied!":"Click to copy"}</span>}
            </div>
        </CopyToClipboard>
    );
}

export default Result;