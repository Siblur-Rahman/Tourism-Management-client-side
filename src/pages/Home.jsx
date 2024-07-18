import { useLoaderData } from "react-router-dom";
import TouristsSpotsSection from "../components/TouristsSpotsSection";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard";
import Banner from "../components/Banner";
import {Cursor, useTypewriter } from 'react-simple-typewriter'
const Home = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'Thank You', 'For Visiting', 'Our WebSite'],
        loop: 0
      })

    const spots = useLoaderData();
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch(`${import.meta.env.VITE_API_URL}/countries`)
        .then(res => res.json())
        .then(data =>setCountries(data))
    }, [])
    return (
        <div>
            <div className="text-3xl text-red-500 text-center">{text}<Cursor cursorColor='red' /></div>
            <Banner/>
            <div className="lg:grid grid-cols-3 gap-3">

            {
                    spots.map(sport =><TouristsSpotsSection
                    key={sport._id} sport={sport}
                    >
                    </TouristsSpotsSection>)
                }
                
                </div>,
                <div>
                     <h2 className="text-4xl mt-4 text-center mb-3 font-semibold text-red-500">Meny TouristSport in These Crountries</h2>

                    <div className="lg:grid grid-cols-3 gap-3">

                        {
                            countries.map(country =><CountryCard key={country._id} courntry={country}></CountryCard>)
                        }
                        
                    </div>
                </div>
        </div>
    );
};

export default Home;