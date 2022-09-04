import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Films= () => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then( result => {
                setFilms(result);
            });
    }, []);

    return (
        <>
        <h3>Films:</h3>
        <section className="films">
            
            {films.map((x, i) => <><p><Link className="titleFilm" key={x.title} to={`/films/${x.id}`}>{x.title} ({x.original_title})</Link></p>
            {/* <hr></hr>
            <ul>
                <li>Ancestry: {x.ancestry}</li>
                <li>Patronus:{x.patronus}</li>
    </ul>*/}
            </>)}
           
        </section>
        </>
    )
}

export default Films;
