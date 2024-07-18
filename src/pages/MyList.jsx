import { data } from "autoprefixer";
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import MyListTr from "../components/MyListTr";

const MyList = () => {

    const { user, logOut } = useContext(AuthContext);

    const sports = useLoaderData();
    const myList = sports.filter(sport =>sport.UserEmail == user.email);


    return (
        <div>
            <h2>MyList: {myList.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>Serial no.</th>
                        <th>tourists_spot_name</th>
                        <th>country_Name</th>
                        <th>location</th>
                        <th>update</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        myList.map((sport, index )=><MyListTr index={index} sport={sport}></MyListTr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;