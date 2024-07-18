import { useEffect, useState, usspot } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  const [images, setImages] = useState([])
  useEffect(() =>{
      fetch(`${import.meta.env.VITE_API_URL}/TouristsSpot`)
      .then(res => res.json())
      .then(data =>setImages(data))
  }, [])
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
                                        {
                                            images.map(spot => <SwiperSlide key={spot.id} className="">
                                              <img src={spot.image} className="rounded-box w-full h-[500px]" />
                                              <div className="absolute text-3xl text-center font-bold text-red-600 z-10 top-1/2 left-1/2 bg-gray-300 p-2 rounded-2xl">
                                               <div>
                                               {spot.country_Name}
                                               </div>
                                               <hr />
                                               <div className="text-white ">
                                               {spot.tourists_spot_name}
                                               </div>
                                              </div>
                                              </SwiperSlide>)
                                        }
  </Swiper>
        
  );
};

export default Banner;