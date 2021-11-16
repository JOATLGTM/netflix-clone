import React, { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer';


const base_url = 'https://image.tmdb.org/t/p/original/'

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if [], run once when the row loads, and don't run it again
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
            // https://developers.google.com/youtube/player_parameters
        }
    }

    const handleClick = movie => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    // https://www.youtube.com/watch?v=urlID
                    const urlParams = new URLSearchParams(new URL(url).search);
                    // v = urlID
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => {
                    return (
                        <img
                            onClick={() => handleClick(movie)}
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={`${movie.name}`} 
                        />
                    )
                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}
