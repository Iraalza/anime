import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const SpeciesList= () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/species')
            .then(res => res.json())
            .then( result => {
                setSpecies(result);
            });
    }, []);

    return (
        <>
        <h3>Species:</h3>
        <section className="species">
            
            {species.map((x, i) => <><p><Link className="nameSpecies" key={x.title} to={`/species/${x.id}`}>{x.name}</Link></p>
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

export default SpeciesList;
