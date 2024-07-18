import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
// import Swal from "sweetalert2";

const TouristsSpotsSection = ({sport}) => {

    const { user, logOut } = useContext(AuthContext);


    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName} = sport
    
    return (
        <div className="card shadow-xl border-2 p-2">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="" /></figure>
                <div className="card-body">

                    <h2 className="card-title">{country_Name}</h2>
                    <h2 className="card-title"><span>{tourists_spot_name}</span><span className="bg-yellow-300 px-2 rounded-lg">$
                    {average_cost}</span></h2>

                    <hr className="mt-5 border-2"/>
                    <p>Location: {location}</p>
                    <p>Description: {short_description}</p>
                    { user? <Link to={`/viewdetails/${_id}`} className="btn btn-success">View Details</Link>: <Link to={`/login`} className="btn btn-success">View Details</Link>}     
                </div>
            </div>
    );
};

export default TouristsSpotsSection;