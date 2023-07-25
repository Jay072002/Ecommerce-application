import styled from "styled-components";

const Container = styled.div`
  width: 33vw;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  position: absolute;
  z-index: 999;
  top: 0;
  bottom: 0;
  margin: auto;
`;

const Title = styled.h1`
  color: #fff;
  /* font-weight: bolder; */
  letter-spacing: 2px;
`;

const Button = styled.button`
  padding: 7px;
  margin-top: 20px;
  font-size: 10px;
  letter-spacing: 2px;
  border: none;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={item.img} />
      </ImageContainer>
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
};

export default CategoryItem;
