import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ImageSlickBg,
  SlickImageBg,
  SlickImage,
  SlickText,
  ImageNext,
  ImagePrev,
  ImageBg
} from "./styledComponents";
import { ImagesLists } from "./ImagesList";
import "./style.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <ImageNext src="/assets/TrainingHubs/right-arrow.png" onClick={onClick} />
    </>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <>
      <ImagePrev src="/assets/TrainingHubs/left-arrow.png" onClick={onClick} />
    </>
  );
}
export default class ImageSlick extends React.Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            adaptiveHeight: true,
            variableWidth: true,
            infinite: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            adaptiveHeight: true,
            variableWidth: true,
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            adaptiveHeight: true,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <ImageSlickBg>
          <Slider {...settings}>
            {ImagesLists.map(image => (
              <ImageBg>
                <SlickImageBg>
                  <SlickImage src={image.src} />
                  <SlickText>{image.title}</SlickText>
                </SlickImageBg>
              </ImageBg>
            ))}
          </Slider>
        </ImageSlickBg>
      </div>
    );
  }
}
