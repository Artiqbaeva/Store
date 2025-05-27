import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
const Users = () => {
   const navigate = useNavigate(); 
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      api.get("/users")
        .then((res) => {
          console.log(res.data);
          setUsers(res.data)})
        .catch((err) => console.error(err));
    }, []);
    if (!users) {
      return <div className="container py-10 text-center">Loading...</div>;
    }
  return (
    <div className="container max-w-sm w-full grid grid-cols-4 gap-6 mt-36  rounded-xl p-1 min-h-[81vh]">
       {
         users?.map((user) =>(
      <div key={user.id}   className="max-w-sm w-full mt-[50px] bg-white shadow-md rounded-xl p-6 border"
        onClick={() => navigate(`/users/${user.id}`)}>
      <h2 className="text-xl text-center capitalize  font-bold mb-2">
        {user.name?.firstname} {user.name?.lastname}</h2>
      <p className="text-gray-700 mb-1"><strong>Username:</strong> {user.username}</p>
      <p className="text-gray-700 mb-1"><strong>Email:</strong> {user.email}</p>
      <p className="text-gray-700 mb-1"><strong>Phone:</strong> {user.phone}</p>
      <p className="text-gray-700 mb-1"><strong>Address:</strong> {user.address?.number} {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>
      <p className="text-gray-700 mb-1"><strong>Location:</strong> {user.address?.geolocation.lat}, {user.address?.geolocation?.long}</p>
    </div>
    ))}
    </div>
  )
}

export default React.memo(Users)