import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { api } from "../../api";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike } from "../../redux/wishlistSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const isLiked = (id) => wishlist.some(item => item.id === id);

  const handleToggle = (product) => {
    dispatch(toggleLike(product));
  };

  return (
    <div className="container mx-auto font-sans-serif py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-h-[81vh]">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-5 cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 rounded-lg mb-4 object-contain"
            onClick={() => navigate(`/products/${product.id}`)}
          />
          <h2 className="text-lg font-bold">{product.title.slice(0, 20)}...</h2>
          <p className="text-gray-600 truncate">{product.description}</p>
          <div className="flex items-center mt-3 justify-between">
            <span className="text-gray-800 font-semibold">${product.price}</span>
            <button onClick={() => handleToggle(product)}>
              {isLiked(product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Products);
