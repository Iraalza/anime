import { specialCharMap } from '@testing-library/user-event/dist/keyboard';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';

const Species = () => {
    const [species, setSpecies] = useState({});
    const { speciesId } = useParams();
    const navigate = useNavigate();
     //const location = useLocation();
     //console.log(location);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/species/${speciesId}`)
            .then(res => res.json())
            .then(result => {
                setSpecies(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [speciesId, navigate]);


    return (
        <>
        <h2>Information about {species.name}</h2>
        <div className='infoSpecies'>
            
                <p><b>Name:</b> {species.name}</p>
                <p><b>Classification:</b>  {species.classification}</p>
                <p><b>Eye colors: </b> {species.eye_colors}</p>
                <p><b>Hair colors: </b> {species.hair_colors}</p>
            </div>      
           
        </>
    );
};

export default Species;
