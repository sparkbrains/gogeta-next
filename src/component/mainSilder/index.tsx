import React, { useRef } from "react";
import Slider from "react-slick";

export default function MainSlider({
  children,
  breakPoints,
  hideSlider,
  slidesToShow = 3,
  slidesToScroll = 1,
  params,
  scrollMultiSlides,
  responsiveParams,
  setting,
  slider
}:any) {
  if (hideSlider) {
    return children;
  }

  let extraParameters = {
    speed: 500,
    initialSlide: 0,
    slidesToShow,
    slidesToScroll,
    pauseOnHover: true,
    fade:true,
    arrows:false,
    infinite: false,
    autoplay: false,
    dots: false,
    className: "",
    centerMode: false,
    // slide: "div",
  };
  const para = {
    ...extraParameters,
    ...params,
  };
  function showSlidesCount(object:any) {
    if (!object) return null;
    return (
      Object.entries(object) &&
      Object.entries(object)?.map(([brk, number]) => {
        return {
          breakpoint: Number(brk),
          settings: {
            slidesToShow: Number(number),
            slidesToScroll: scrollMultiSlides ? Number(number) : 1,
            centerMode: responsiveParams?.["centerMode"]?.[brk] ?? true,
            dots: responsiveParams?.["dots"]?.[brk] ?? true,
            arrows: responsiveParams?.["arrows"]?.[brk] ?? true,
          },
        };
      })
    );
  }

  const responsive = { responsive: showSlidesCount(breakPoints || {}) };
  let settings = {
    ...para,
    ...responsive,
  };
  if (typeof setting === "object") {
    settings = { ...setting };
  }
  return <Slider ref={slider} {...settings}>{children}</Slider>;
}
