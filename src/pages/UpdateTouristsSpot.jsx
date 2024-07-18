import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const UpdateTouristsSpot = () => {
    const navigate = useNavigate()
    const sport =useLoaderData();
    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport

    const { user, logOut } = useContext(AuthContext);

    const handleUpdateTouristsSpot = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = form.country_Name.value;
        const average_cost = form.average_cost.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
        const UserEmail = user.email;
        const UserName = form.UserName.value;
        const updatedTouristsSpot ={image, tourists_spot_name, country_Name, average_cost, location, short_description, seasonality, travel_time, totaVisitorsPerYear, UserEmail, UserName}
        fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot/${_id}`, {
          method: 'PUT',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(updatedTouristsSpot)
        })
        .then(res => res.json())
        .then(data =>{
        //   console.log(data);
        //   if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Update TouristsSpot Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            form.reset();
            navigate('/mylist')
        //   }
        })
        console.log(UserName)
       }
    return (
        <div className="w-4/6 mx-auto border-2 p-10 bg-base-300">
                    <h1 className="text-3xl font-bold py-3 text-center rounded-xl">Update Now!</h1>
                    <form action="" onSubmit={handleUpdateTouristsSpot}>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Image URL</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">tourists spot name</span>
                        </label>
                        <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">Average cost</span>
                        </label>
                        <input type="text" name="average_cost" defaultValue={average_cost} className="input input-bordered" required />
                    </div>
                    
                    {/* country_Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">country Name</span>
                        </label>
                        <input type="text" name="country_Name" defaultValue={country_Name} className="input input-bordered" required />
                    </div>
                    
                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">Location</span>
                        </label>
                        <input type="text" name="location" defaultValue={location} className="input input-bordered" required />
                    </div>
                    
                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">short description</span>
                        </label>
                        <input type="text" name="short_description" defaultValue={short_description} className="input input-bordered" required />
                    </div>

                    {/* seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">seasonality</span>
                        </label>
                        <input type="text" name="seasonality" defaultValue={seasonality} className="input input-bordered" required />
                    </div>
                    

                    {/* travel_time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">travel time</span>
                        </label>
                        <input type="text" name="travel_time" defaultValue={travel_time} className="input input-bordered" required />
                    </div>
                    

                    {/* totaVisitorsPerYear */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">totaVisitorsPerYear</span>
                        </label>
                        <input type="text" name="totaVisitorsPerYear" defaultValue={totaVisitorsPerYear} className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="">User Email</span>
                        </label>
                        <input type="email" name="UserEmail" placeholder={user.email} disabled  className="input input-bordered" required />
                    </div>

                    {/* UserName */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">User Name</span>
                        </label>
                        <input type="text" name="UserName" defaultValue={user.displayName} className="input input-bordered" />
                    </div>
                    
                    <input type="submit" value="Update TouristsSpot" className="mt-5 w-full btn btn-success text-3xl"/>
                    </form>
            </div>
    );
};

export default UpdateTouristsSpot;