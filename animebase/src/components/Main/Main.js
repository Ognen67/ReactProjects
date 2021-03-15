import React, {useEffect, useState} from 'react';
import AnimeCard from "../AnimeCard/AnimeCard";
import Button from '@material-ui/core/Button'

import classes from './Main.module.css'
import {Input} from "@material-ui/core";

const Main = (props) => {

    const [animeList, SetAnimeList] = useState([])
    const [topAnime, SetTopAnime] = useState([])
    const [search, SetSearch] = useState("")

    const getTopAnime = async () => {
        const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
            .then(res => res.json())

        SetAnimeList(temp.top.slice(0, 10))
    }

    const handleSearch = e => {
        if(search !== '')
        {
        e.preventDefault()

            fetchAnime(search).then(r => console.log(r))

        }
    }

    const fetchAnime = async (query) => {
        const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`)
            .then(res => res.json())

        SetAnimeList(temp.results)
        console.log(animeList)
    }

    useEffect(() => {
        getTopAnime()
        console.log(topAnime)
    }, [])

    const topAnimeList = animeList
        .map(anime => <AnimeCard title={anime.title}
                                 img={anime.image_url}
                                 href={anime.url}
                                 score={anime.score}
                                 key={anime.mal_id}
                                 end={anime.end_date}
                                 synopsis={anime.synopsis}
                                 rated={anime.rated}
        />)

    return (
        <div className={classes.Main}>
            <div className={classes.Settings}>
                <p className={classes.Title}>Sort by: </p>
                <select>
                    <option>Popularity</option>
                    <option>Title</option>
                    <option>Score</option>
                </select>
                <Input className={classes.Input}
                       placeholder="Search for an anime"
                       type="search"
                       value={search}
                       required
                       onChange={e => SetSearch(e.target.value)}
                />
                <Button className={classes.SearchBtn} onClick={handleSearch}>Search</Button>

            </div>
            <div className={classes.AnimeList}>
                {topAnimeList}
            </div>
        </div>
    );
};

export default Main;
