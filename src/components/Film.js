import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';

const Film = () => {
    const [film, setFilm] = useState({});
    const { filmId } = useParams();
    const navigate = useNavigate();
     //const location = useLocation();
     //console.log(location);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
            .then(res => res.json())
            .then(result => {
                setFilm(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [filmId, navigate]);


    return (
        <>
        <h2>Information about {film.title}</h2>
        <section className='content'>
        <div className='infoFilm'>
            
                <p><b>Original title romanised:</b> {film.original_title_romanised}</p>
                <p><b>Description:</b>  {film.description}</p>
                <p><b>Director: </b> {film.director}</p>
                <p><b>Release date: </b> {film.release_date}</p>
            </div>      
            <div className='imageFilm'> <img src={film.image} alt="" /></div>    
        </section>
           
        </>
    );
};

export default Film;
