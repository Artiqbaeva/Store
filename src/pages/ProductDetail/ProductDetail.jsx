
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { SlArrowLeft } from "react-icons/sl";
const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, [id]);
  
  
  if (!data) {
    return <div className="container py-10 text-center min-h-[81vh]">Loading...</div>;
  }

  return (
    <div>
      <SlArrowLeft  className="text-2xl m-18 " onClick={()=> navigate(-1)}  />
      <div className="container mx-auto grid grid-cols-1 place-items-center md:grid-cols-2 gap-10 py-10 min-h-[81vh]">
      <div>
      
        <img
          src={data.image}
          alt={data.title}
          className="rounded-lg w-[70%] mt-2 object-contain  p-4 "
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-600 mb-4">{data.description}</p>
        <div className="text-2xl font-semibold text-gray-900 mb-6">${data.price} USD</div>
        <button className="bg-gray-800 hover:opacity-80 transition text-white px-6 py-2 rounded ">
          Add to Cart
        </button>
      </div>
    </div>
    </div>

  );
};

export default React.memo(ProductDetail);
