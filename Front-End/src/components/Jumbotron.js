import React from "react";
import styled from "styled-components";
import "../scss/Swiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Jumbotron() {
  return (
    <React.Fragment>
      <Container>
        <Swiper
          className="swiper-container"
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          centeredSlides={true}
          loop={true}
          onInit={(swiper) => console.log(swiper)}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide key={1} className="swiper-slide">
            <Card>Card 1</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>Card 2</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>Card 3</Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>Card 4</Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </React.Fragment>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  width: 800px;
  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;

const Card = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Jumbotron;
