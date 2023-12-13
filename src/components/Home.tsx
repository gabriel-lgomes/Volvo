import React from "react";
import useCars from "../hooks/useCars";
import { Block, Text } from "vcc-ui";
import CarCard from "./CarCard";
import styles from "../../public/css/components/card-wrapper.module.css";
import PaginationDesktop from "./PaginationDesktop";
import Spacer from "./Spacer";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Home: React.FC = () => {
  const { cars } = useCars();

  return (
    <Block
      extend={{
        maxWidth: "80%",
        width: "100%",
        margin: "0 auto",
        padding: "60px 0",
      }}
    >
      <Text variant="cook" extend={{ textAlign: "center" }}>
        Todos os modelos Recharge
      </Text>
      <Spacer height="40px" />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard key={car.id} car={car} />
          </SwiperSlide>
        ))}
        <Spacer height="40px" />
        <PaginationDesktop />
      </Swiper>
    </Block>
  );
};
