import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

const Home = () => {
  const images = [
    'https://i.etsystatic.com/41283809/r/il/e6a1d1/5929813794/il_fullxfull.5929813794_4n0m.jpg',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcmV8ZW58MHx8MHx8fDA%3D',
    'https://media.istockphoto.com/id/832186590/photo/2-for-1-and-two-for-one-offer-and-special-deal-for-t-shirt-and-clothing-in-clothes-shop.jpg?s=612x612&w=0&k=20&c=cjGEMbDj3Dvkle-XBfAm_hzXynTpxbb6Ycy127m-v2U=',
    'https://retaildesignblog.net/wp-content/uploads/2020/08/ON-OFF-store-by-Studiolite-01-780x520.png',
    'https://retaildesignblog.net/wp-content/uploads/2019/03/Off-White-store-02-780x521.png',
  ];

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
           <Swiper
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              loop={true}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper"
    >
      {images.map((url, index) => (
        <SwiperSlide key={index}>
          <img src={url} alt={`Slide ${index + 1}`} />
        </SwiperSlide>
      ))}
    </Swiper>
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