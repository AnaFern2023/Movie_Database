import { Link } from "react-router-dom";

const MovieItems = (props) => {
    return (
        <section className="movies_background">
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((element, index) => {
                <p key={index}>{element}</p>
            })
            }
            <Link to={`/details/${props.id}`}>Show more</Link>
        </section>
    );
}

export default MovieItems;