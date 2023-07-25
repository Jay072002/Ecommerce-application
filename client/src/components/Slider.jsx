import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useEffect, useState } from "react";
import { sliderItem } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  /* background-color: coral; */
  position: relative;
  /* margin-top: 50px;x  */
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease-in-out;
`;

const Slide = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  width: 50vw;
`;

const Image = styled.img`
  width: 100%;
  height: 90%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 100px;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 40px;
  font-weight: 500;
`;

const Desc = styled.p`
  margin-bottom: 40px;
  font-size: 16px;
  line-height: 2;
  letter-spacing: 3px;
`;

const Button = styled.button`
  display: inline-block;
  width: 12vw;
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;
  padding: 8px;
  &:hover {
    background-color: gray;
    transition: 0.4s;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : 2));
    } else {
      setSlideIndex((prev) => (prev < 2 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prev) => (prev < 2 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItem.map((item) => {
          return (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
            </Slide>
          );
        })}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
