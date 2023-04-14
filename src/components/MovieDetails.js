import { Link } from "react-router-dom";
import movies from "../data/movies";
import { useParams } from "react-router-dom";
import MovieItems from "./MovieItems";
console.log(movies);

const MovieDetails = () => {

    const movieParams = useParams()
    // console.log(movieParams);

    const eachMovieDetail = movies.filter(() => {
        // console.log(movieParams.id);
        return movieParams.id
    })
    return (
        <div className="movie_details">
            <Link to='/'>Home</Link>
            <p>📝 {eachMovieDetail[0].title}</p>
            <p>📆 {eachMovieDetail[0].year}</p>
            <p>🎥 {eachMovieDetail[0].director}</p>
            <p>⏱️ {eachMovieDetail[0].duration}</p>
            <p>🏆 {eachMovieDetail[0].rate}</p>
        </div>
    );
}

export default MovieDetails;