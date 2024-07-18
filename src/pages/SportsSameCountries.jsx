import {useParams } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";
import { useEffect, useState } from "react";

const SportsSameCountries = () => {
const [spots, setSpots] = useState([]);
    const {country_name} = useParams();
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`)
        .then(res => res.json())
        .then(data =>setSpots(data))
    }, [])
    console.log(country_name)
    const countrySports = spots.filter(sport => sport.country_Name.toLowerCase() == country_name.toLowerCase())

    return (
            <>
            <div className="lg:grid grid-cols-2 gap-3">

            {
                countrySports.map(sport =><TouristsSpotsSection
                    key={sport._id} sport={sport}
                    >
                    </TouristsSpotsSection>)
                }
            </div>
            </>
    );
};

export default SportsSameCountries;