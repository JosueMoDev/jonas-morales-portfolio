import { Box } from "@mui/system";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Pagination } from "swiper";

const ImagenCarrousel = ({ images }) => {
  return (
    <Box sx={{ maxWidth: "100%", maxHeight: "100%", flexGrow: 1 }}>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={true}
        modules={[EffectCreative, Pagination]}
        className="mySwiper"
      >
        {images.map((imagen, index) => (
          <SwiperSlide key={index}>
            <GatsbyImage
              className="z-[1] pointer-events-none rounded-md"
              image={getImage(imagen.gatsbyImageData)}
              loading="lazy"
              alt="me profile"
              width={"100%"}
              height={"100%"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImagenCarrousel;
