import movies from '../data/movies'
import MovieItems from '../components/MovieItems'
import { useState } from 'react';

// console.log(movies);
const Home = () => {
    const [movie, setMovies] = useState(movies)
    const [movieInput, setMovieInput] = useState([])

    const ascendDate = () => {
        let sortDateAscend = [...movie]
        movies.sort((x, y) => x.year - y.year)
        console.log(sortDateAscend);
        setMovies(sortDateAscend)
    }
    const decendDate = () => {
        let sortDateDecend = [...movie]
        movies.sort((x, y) => y.year - x.year)
        console.log(sortDateDecend);
        setMovies(sortDateDecend)
    }

    const bestRate = () => {
        let sortBestRate = [...movie]
        movies.sort((x, y) => y.rate - x.rate)
        console.log(sortBestRate);
        setMovies(sortBestRate)
    }

    const toAz = () => {
        let sortAtoZ = [...movie]

        movies.sort((x, y) => {

            if (x.title < y.title) {
                return -1;
            }
            else if (x.title > y.title) {
                return 1;
            }
            else {
                return 0;
            }
        })
        console.log(sortAtoZ);
        setMovies(sortAtoZ)
    }

    const toZa = () => {
        let sortZtoA = [...movies]

        movies.sort((x, y) => {

            if (x.title < y.title) {
                return 1;
            }
            else if (x.title > y.title) {
                return -1;
            }
            else {
                return 0;
            }
        })
        console.log(sortZtoA);
        setMovies(sortZtoA)
    }

    const addFilm = () => {
        const inputFilmName = document.querySelector('.input_text').value
        console.log(inputFilmName);
        setMovieInput([...movieInput, inputFilmName])
        document.querySelector('.input_text').value = ""
    }

    return (
        <div>
            <section className="navbar">
                <div>
                    <input className='input_text' type="text" name="" id="inputText" />
                    <input className='add_button' onClick={addFilm} type="button" value="Add film" />
                </div>
                <input className='style_button' onClick={ascendDate} type="button" value="Sort by Date Ascending" />
                <input className='style_button' onClick={decendDate} type="button" value="Sort by Date Descending" />
                <input className='style_button' onClick={bestRate} type="button" value="Best Rate" />
                <input className='style_button' onClick={toAz} type="button" value="A-Z" />
                <input className='style_button' onClick={toZa} type="button" value="Z-A" />
            </section>

            <section className="movies_grid">
                {movies.map((element, index) => {
                    return (
                        < MovieItems
                            key={index}
                            title={element.title}
                            year={element.year}
                            director={element.director}
                            duration={element.duration}
                            rate={element.rate}
                            genre={element.genre}
                        />
                    )
                })}
            </section>
        </div>
    );
}

export default Home;