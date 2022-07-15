import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const PortfolioCard = (props) => {
  const { slug, name, images } = props?.item;
  console.log(images[0]?.localFile);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-custom">
      <Swiper>
        {images.reverse()?.map((image) => (
          <SwiperSlide>
            <GatsbyImage image={getImage(image?.localFile)} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-5">
        <h3 className="text-center">{name}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
