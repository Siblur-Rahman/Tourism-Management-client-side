
import { Link, useLoaderData } from "react-router-dom";
import AllTouristsSpots from "../components/AllTouristsSpots";
import { useEffect, useState } from "react";

const AllTouristsSpot = () => {
    const [showSpots, setShowSpots] = useState([])
    const spots = useLoaderData();
    useEffect(() =>{
        setShowSpots(spots)
    }, [showSpots])
    const handleSort = sort =>{
        let showList = [...spots]
        if(sort === 'ascending'){
            console.log('ascending')
           showSpots.sort((a, b) => a.average_cost -b.average_cost);
            setShowSpots(showList)
        }
        else if(sort === 'descending'){
           showSpots.sort((a, b) => b.average_cost -a.average_cost);
            setShowSpots(showList)
        }
    }
    
    return (

     <div>
            <div className="w-full flex justify-center">
                <details className="dropdown mb-32">
                    <summary className="m-1 btn w-52 bg-success text-white font-extrabold text-2xl">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() =>handleSort('ascending')}><a className="justify-center text-xl">ascending</a></li>
                        <li onClick={() =>handleSort('descending')}><a className="justify-center text-xl">Descending</a></li>
                    </ul>
                </details>
            </div>
            <div className="lg:grid grid-cols-2 gap-3">
                {
                    showSpots.map(sport =><AllTouristsSpots
                    key={sport._id} sport={sport}
                    >
                    </AllTouristsSpots>)
                }
            </div>

        </div>
    );
};

export default AllTouristsSpot;