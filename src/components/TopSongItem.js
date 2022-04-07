import React from 'react';


const TopSongItem = ({song}) => {
    const link = song.link[0].attributes.href
    return (
        <div>
        <a href={link} >{song.title.label} </a>
        
        </div>
    )
        
    
    
};

export default TopSongItem;