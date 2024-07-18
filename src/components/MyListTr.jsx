
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyListTr = ({sport, index}) => {
    const navigate = useNavigate();
    
    const handleDelete = _id => {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then((result) => {
                if (result.isConfirmed) {
    
                fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data=>{
                    console.log(data);
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                    navigate('/mylist')
                })
                }
              });
        }
    const {_id, image, tourists_spot_name, country_Name, location, short_description, average_cost, seasonality, travel_time,totaVisitorsPerYear, UserEmail, UserName }= sport
    return (
                        <tr>
                            <th>{index+1}</th>
                            <td>{tourists_spot_name}</td>
                            <td>{country_Name}</td>
                            <td>{location}</td>
                            <td><Link to={`/updatetouristsspot/${_id}`} className="btn btn-success">Update</Link></td>
                            <td><button className="btn btn-warning" onClick={()=> handleDelete(_id)}>Delete</button></td>
                        </tr>
    );
};

export default MyListTr;