import React, { useState, useEffect } from "react";
import TopSongsList from "../components/TopSongsList";

const TopSongsContainer = () => {
    const [songs , setSongs] = useState([]);
    // const [selectedSong , setSelectedSong] = useState(null);

    useEffect (() => {
        getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    return (
        <>
        <TopSongsList songs={songs} />
        </>
    )
}

export default TopSongsContainer;