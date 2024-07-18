import { Link } from "react-router-dom";

const CountryCard = ({courntry}) => {
    const {country_Name, image, short_description } = courntry

    return (
        <Link to={`/sportssamecountriy/${country_Name}`}>
                <div className="card shadow-xl border-2 p-2 h-[500px]">
                    <img src={image} alt="" className="h-56"/>
                    <div className="card-body">
                    <h2 className="text-2xl">
                        {
                            country_Name
                        }
                    </h2>
                   <p className="overflow-auto"> {
                        short_description
                    }</p>
                    </div>
                    
                </div>
        </Link>
    );
};

export default CountryCard;