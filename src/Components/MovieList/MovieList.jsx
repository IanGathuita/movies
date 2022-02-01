import "./MovieList.css";
import Movie from "../Movie/Movie";
import React, {useState} from 'react';
import { Movies } from "../Movies/Movies";



export default function MovieList(){
    const [movies,setMovies] = useState(Movies);
    console.log(movies);
    return(
        <div>
            <h1>Movies</h1>
            <Movie movies={movies}/>
        </div>

    );
}