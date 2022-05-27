import React, { useState } from "react";

import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

import { sliderItems } from "../../../data";

import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./slider.styles";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const clickHandler = (direction) => {
    // switch (direction) {
    //   case "left":
    //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    //     break;
    //   case "right":
    //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    //     break;
    //   default:
    //     setSlideIndex(0);
    // }
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => clickHandler("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.image} alt={item.title} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Shop now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => clickHandler("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
