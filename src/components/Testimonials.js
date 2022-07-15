import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robert Fox",
      text: "The Unimax global team works really hard to ensure a high level of quality working with humans Global like having a family member who can fix everything.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      name: "Robert Fox",
      text: "The Unimax global team works really hard to ensure a high level of quality working with humans Global like having a family member who can fix everything.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 3,
      name: "Robert Fox",
      text: "The Unimax global team works really hard to ensure a high level of quality working with humans Global like having a family member who can fix everything.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 4,
      name: "Robert Fox",
      text: "The Unimax global team works really hard to ensure a high level of quality working with humans Global like having a family member who can fix everything.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <section className="bg-background py-36">
      <SectionTitle className="text-4xl md:text-5xl text-center">
        Some Positive Feedback
      </SectionTitle>
      <SectionText className="max-w-5xl mx-auto text-center">
        When it comes to online reviews, a high star rating isn’t enough to set
        your business apart from the competition. They want to know what exactly
        they liked so that they can gauge whether it aligns with their own
        preferences.
      </SectionText>
      <div className="container px-10 mx-auto mt-20">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              className="flex flex-col items-center bg-white shadow-custom p-10 rounded-lg"
            >
              <div className="rounded-full overflow-hidden w-20 h-20 flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={testimonial.img}
                  alt=""
                />
              </div>
              <h4 className="text-primary font-bold text-2xl my-5">
                {testimonial.name}
              </h4>
              <p className="text-center text-primary leading-7">
                {testimonial.text}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
