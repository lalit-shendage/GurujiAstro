import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Box, Text, Image, Flex, IconButton, useDisclosure } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import video1 from '../media/video/videoplayback.mp4';
import video2 from '../media/video/videoplayback(1).mp4';
import thumbnail1 from '../media/thumbnail/thumbnail1.jpg';
import thumbnail2 from '../media/thumbnail/thumbnail2.jpg';

function VideoCarousel() {
  const videos = [
    { id: 1, title: 'Video 1', thumbnail: thumbnail1, videoUrl: video1 },
    { id: 2, title: 'Video 2', thumbnail: thumbnail1, videoUrl: video1 },
    { id: 3, title: 'Video 3', thumbnail: thumbnail2, videoUrl: video2 },
    { id: 4, title: 'Video 4', thumbnail: thumbnail2, videoUrl: video2 },
  ];
  const [currentVideo, setCurrentVideo] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoRef = useRef(null);

  const nextVideo = () => {
    setCurrentVideo((currentVideo + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((currentVideo - 1 + videos.length) % videos.length);
  };

  const selectVideo = (index) => {
    setCurrentVideo(index);
  };

  const playVideo = () => {
    videoRef.current.play();
    onOpen();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  return (
    <div className="container video">
      <h1 className="heading">User Testimonial</h1>
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
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        onSlideChange={(swiper) => setCurrentVideo(swiper.activeIndex)}
        className="swiper_container"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id}>
            <Box
              position="relative"
              width="100%"
              height="auto"
              onClick={() => {
                isOpen ? onClose() : onOpen();
                selectVideo(index);
              }}
              cursor="pointer"
            >
          <video src={videos[currentVideo].videoUrl} ref={videoRef} style={{ width: '95%', height: 'auto' }} controls />             
           <IconButton

                aria-label="play video"
                icon={<FaPlay />}
                fontSize="30px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                onClick={() => {
                  onOpen();
                  selectVideo(index);
                }}
                style={{ display: 'none' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Flex justify="center" mt="4">
      <IconButton
        aria-label="previous video"
        icon={<FaChevronLeft />}
        fontSize="30px"
        mr="2"
        onClick={prevVideo}
      />
      <IconButton
        aria-label="next video"
        icon={<FaChevronRight />}
        fontSize="30px"
        ml="2"
        onClick={nextVideo}
      />
    </Flex>
    </div>
  );
}
              
export default VideoCarousel;