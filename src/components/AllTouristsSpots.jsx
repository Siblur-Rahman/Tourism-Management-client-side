import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const AllTouristsSpots = ({sport}) => {
    const { user, logOut } = useContext(AuthContext);
    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName} = sport
    return (
        <div className="card shadow-xl border-2 p-2">
                <figure className='bg-base-200 h-[230px] w-[320px] mx-auto'><img src={image} alt="" /></figure>
                <div className="card-body">
                <hr className="mt-5 border-2"/>
                <h2 className="card-title">tourists spot name: {tourists_spot_name}</h2>
                <hr className="mt-5 border-2"/>
                <h2 className="card-title"><span>{tourists_spot_name}</span><span className="bg-yellow-300 px-2 rounded-lg">$ {average_cost}</span></h2>
                <p>Seasonality: {seasonality}</p>
                <p>Travel time: {travel_time}</p>
                <p>To taVisitors PerYear: {totaVisitorsPerYear}</p>
                <p>User Email: {UserEmail}</p>
                <p>Description: {short_description}</p>
                { user? <Link to={`/viewdetails/${_id}`} className="btn btn-success">View Details</Link>: <Link to={`/login`} className="btn btn-success">View Details</Link>}     
                </div>
            </div>
    );
};

export default AllTouristsSpots;