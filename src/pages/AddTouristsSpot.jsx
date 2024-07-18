import Swal from 'sweetalert2'
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';

const AddTouristsSpot = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleAddTouristsSpot = event =>{
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
        const newTouristsSpot ={image, tourists_spot_name, country_Name, average_cost, location, short_description, seasonality, travel_time, totaVisitorsPerYear, UserEmail, UserName}
        console.log(newTouristsSpot)
        fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`, {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(newTouristsSpot)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'AddTouristsSpot Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
            form.reset()
          }
        })
        console.log(UserName)
       }
    return (
        <div className="w-4/6 mx-auto border-2 p-10 bg-base-300">
                    <h1 className="text-center">Register Now!</h1>
                    <form action="" onSubmit={handleAddTouristsSpot}>
                    <div className="form-control">
                        <label className="label">
                            <span className="">Image URL</span>
                        </label>
                        <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">tourists spot name</span>
                        </label>
                        <input type="text" name="tourists_spot_name" placeholder="tourists spot name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">Average cost</span>
                        </label>
                        <input type="text" name="average_cost" placeholder="Average cost" className="input input-bordered" required />
                    </div>
                    
                    {/* country_Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">country Name</span>
                        </label>
                        <input type="text" name="country_Name" placeholder="country Name" className="input input-bordered" required />
                    </div>
                    
                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Location" className="input input-bordered" required />
                    </div>
                    
                    {/* short description */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">short description</span>
                        </label>
                        <input type="text" name="short_description" placeholder="short description" className="input input-bordered" required />
                    </div>

                    {/* seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="seasonality" className="input input-bordered" required />
                    </div>
                    

                    {/* travel_time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">travel time</span>
                        </label>
                        <input type="text" name="travel_time" placeholder="travel_time" className="input input-bordered" required />
                    </div>
                    

                    {/* totaVisitorsPerYear */}
                    <div className="form-control">
                        <label className="label">
                            <span className="">totaVisitorsPerYear</span>
                        </label>
                        <input type="text" name="totaVisitorsPerYear" placeholder="totaVisitorsPerYear" className="input input-bordered" required />
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
                        <input type="text" name="UserName" defaultValue={user.displayName}className="input input-bordered" />
                    </div>
                    
                    <input type="submit" value="Add TouristsSpot" className="mt-5 w-full btn btn-success"/>
                    </form>
            </div>
    );
};

export default AddTouristsSpot;