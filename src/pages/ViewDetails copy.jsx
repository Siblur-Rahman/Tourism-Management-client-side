import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const sport = useLoaderData();
    const {image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport
    return (
        <>
        <h1 className="text-red-500 font-extrabold text-3xl text-center bg-slate-500 py-5"> View Details</h1>
        <div className="hero h-[600px] bg-base-200 rounded-2xl my-[10px]">
        <div className="hero-content flex-col lg:flex-row-reverse flex-grow">
            <div className="lg:px-10">
                <h2 className="card-title">{country_Name}</h2>
                <h2 className="card-title">{tourists_spot_name}</h2>
                <h2 className="card-title">User Name{UserName}</h2>
                <hr className="mt-5 border-2"/>
                <p>Average cost: {average_cost}</p>
                <p>Seasonality: {seasonality}</p>
                <p>Travel time{travel_time}</p>
                <p>Location: {location}</p>
                <p>Description: {short_description}</p>
                <p>To taVisitors PerYear: {totaVisitorsPerYear}</p>
                <p>User Email {UserEmail}</p>
                
            </div> 
            <img src={image} className="max-w-sm rounded-lg h-[500px]" />
        </div>
    </div>
        </>
    );
};

export default ViewDetails;