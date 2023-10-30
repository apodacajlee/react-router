import { useState, useEffect } from "react";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers";

function FilmsPage(props) {
    let [list, setList] = useState([]);
    let [searchDirector, setSearchDirector] = useState("");

    function getFilms() {
        fetch("https://studioghibliapi-d6fc8.web.app/films")
            .then((response) => response.json())
            .then((films) => setList(films))
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        getFilms();
    }, []);


    let filmsByDirector = filterFilmsByDirector(list, searchDirector);
    let directors = getListOf(list, "director");

    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="searchDirector">Filter By Director</label>
                    <select
                        name="searchDirector"
                        id="searchDirector"
                        value={searchDirector} 
                        onChange={(event) => setSearchDirector(event.target.value)}
                    >
                        <option value="">All</option>
                        {directors.map((director, idx) => {
                            return (
                                <option key={director + idx} value={director}>{director}</option>
                            );
                        })}
                    </select>
                </div>
            </form>
            <ul>
                {filmsByDirector.map((film) => {
                    return <li key={film.id}>{film.release_date} - {film.title}</li>;
                })}
            </ul>
        </div>
    );

}

export default FilmsPage;