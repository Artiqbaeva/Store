import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { api } from "../../api";

const UserDetail = () => {
      const { id } = useParams();
      const [user, setUser] = useState(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [id]);
    
    useEffect(() => {
        api
          .get(`/users/${id}`)
          .then((res) => setUser(res.data))
          .catch((err) => console.error(err));
      }, [id]);
    
      if (!user) {
        return <div className="container py-10 text-center min-h-[81vh]">Loading...</div>;
      }
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200 min-h-[79vh]">
    <h2 className="text-4xl font-bold mb-10 text-gray-800 text-center ">User Profile</h2>
    <div className="space-y-8 text-gray-700 text-2xl">
      <div><strong>Full Name:</strong> {user.name.firstname} {user.name.lastname}</div>
      <div><strong>Username:</strong> {user.username}</div>
      <div><strong>Email:</strong> {user.email}</div>
      <div><strong>Phone:</strong> {user.phone}</div>
      <div>
        <strong>Address:</strong><br />
        {user.address.number} {user.address.street}, {user.address.city}, {user.address.zipcode}
      </div>
      <div>
        <strong>Geolocation:</strong><br />
        Latitude: {user.address.geolocation.lat}, Longitude: {user.address.geolocation.long}
      </div>
    </div>
  </div>
  )
}

export default UserDetail