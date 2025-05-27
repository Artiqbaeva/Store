import React from 'react'
import Products from '../Product/Products';

const Home = () => {
    const products = [
        {
          id: 1,
          name: "Classic T-Shirt",
          price: "$19.99",
          image: "https://avatars.mds.yandex.net/get-mpic/14622206/2a0000019688b1412ac772fd63eb2e9b3928/orig",
        },
        {
          id: 2,
          name: "Casual Sneakers",
          price: "$49.99",
          image: "https://avatars.mds.yandex.net/get-mpic/15307636/2a000001963e2ba237f1a55df2adb00d11eb/orig",
        },
        {
          id: 3,
          name: "Stylish Backpack",
          price: "$34.99",
          image: "https://avatars.mds.yandex.net/get-mpic/11269834/2a0000019585dce085dc72a686f7fa2ebf6c/orig",
        },
      ];
    
      return (
        <div className="min-h-screen bg-white text-gray-800">
          <section className=" bg-gray-900 text-white py-40 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-lg md:text-xl mb-6">Shop the latest trends at unbeatable prices.</p>
            <a href='/products' className="bg-white text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition">
              Shop Now
            </a>
          </section>
          <section className="py-20 px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {products.map((product) => (
                <div key={product.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
                  <img src={product.image} alt={product.name} className="w-full h-86 object-cover mb-4 rounded-md" />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.price}</p>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-gray-100 py-22 text-center">
            <h3 className="text-2xl font-bold mb-4">Don't Miss Out!</h3>
            <p className="mb-6">Sign up for exclusive offers and the latest news.</p>
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"> Subscribe </button>
          </section>
        </div>
      );
    };

export default React.memo(Home)