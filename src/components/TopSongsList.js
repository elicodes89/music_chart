import React from 'react';
import TopSongItem from './TopSongItem';

const TopSongsList = ({songs}) => {
    const songsItems = songs.map(song => {
        return (
           <TopSongItem song = {song} />
    )
})

    return (
        <>
        {songsItems}
        </>
    );
}

export default TopSongsList;