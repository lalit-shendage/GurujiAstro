import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { EffectCoverflow, Pagination, Navigation } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

const reviews = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non leo sed est rhoncus bibendum non non justo.",
    rating: 4,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Pellentesque auctor massa at elit ullamcorper rhoncus. Nam tristique mauris mauris, sed malesuada nisl efficitur sit amet.",
    rating: 5,
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU",
  },
  {
    id: 3,
    name: "Bob Johnson",
    text: "Fusce vel nulla sed metus rutrum finibus sed ac dui. Suspendisse potenti. Nam elementum, risus nec pulvinar consectetur.",
    rating: 3,
    userImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Alice Brown",
    text: "Sed at pharetra lorem, eu cursus tellus. Donec bibendum eget ex sit amet rhoncus. Nam in malesuada lorem.",
    rating: 4,
    userImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCldKgmO2Hs0UGk6nRClAjATKoF9x2liYYA&usqp=CAU",
  },
];

const Reviews = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    const handleSlideChange = (swiper) => {
      setCurrentReviewIndex(swiper.realIndex);
    };
    const prevReview = () => {
      setCurrentReviewIndex((prevIndex) => prevIndex - 1);
    };
    
    const nextReview = () => {
      setCurrentReviewIndex((prevIndex) => prevIndex + 1);
    };
  
    const renderPaginationBullet = (index, className) => {
      const review = reviews[index];
      return `
        <span class="user ${className}">
          <img src="${review.userImage}" alt="User ${index + 1}" />
        </span>
      `;
    };
  
    return (
      <div className="container video">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: renderPaginationBullet,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSlideChange={handleSlideChange}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="review">
                <h2>{review.name}</h2>
                <p>{review.text}</p>
                <div className="rating">{review.rating}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow" onClick={prevReview}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="user-image-wrapper" style={{display:"none"}}>
            {reviews.map((review, index) => (
              <img
                key={review.id}
                className={`user user-image ${index === currentReviewIndex ? '' : 'inactive'}`}
                src={review.userImage}
                alt={`User ${index + 1}`}
              />
            ))}
          </div>
          <div className="swiper-button-next slider-arrow" onClick={nextReview}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  };
  
  export default Reviews;
