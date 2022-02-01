export default function Movie(props){
    const movies = props.movies;
    return(
        <div>
            <ul>
                {
                    movies.map( (movie) => <li key={movie.id}> {movie.name} - {movie.description} </li> )            
                }
            </ul>
        </div>
    );    
}