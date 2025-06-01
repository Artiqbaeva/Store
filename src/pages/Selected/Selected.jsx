import React from "react";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike } from "../../redux/WishlistSlice";

const Selected = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector(state => state.wishlist.items);

  const isLiked = (id) => wishlist.some(item => item.id === id);

  const handleToggle = (product) => {
    dispatch(toggleLike(product));
  };

  return (
    <div className="min-h-[81vh] container">
      <div className="container mx-auto font-sans-serif py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {wishlist.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-5"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 rounded-lg mb-4 object-contain cursor-pointer"
              onClick={() => navigate(`/products/${product.id}`)}
            />
            <h2 className="text-lg font-bold">{product.title.slice(0, 20)}...</h2>
            <p className="text-gray-600 truncate">{product.description}</p>
            <div className="flex items-center mt-3 justify-between">
              <span className="text-gray-800 font-semibold">${product.price}</span>
              <button
                onClick={() => handleToggle(product)}
                className="mt-2 text-2xl transition-transform duration-200 hover:scale-110"
              >
                {isLiked(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
