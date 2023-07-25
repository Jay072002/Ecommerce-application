import product9 from "../assets/images/products/product9.jpg";
import product10 from "../assets/images/products/product10.jpg";

import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 30px 60px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h5`
  font-size: 30px;
  font-weight: 500;
  color: #3c3b3b;
  letter-spacing: 2px;
  padding: 7px 0;
`;

const Desc = styled.p`
  margin: 20px 0;
`;

const PriceContainer = styled.div`
  padding: 10px 0;
`;

const PriceCurrency = styled.span`
  font-size: 30px;
  margin-right: 6px;
  color: #333131;
`;

const Price = styled.span`
  font-size: 30px;
  color: #333131;
`;

const ProductVariantContainer = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 70px;
`;

const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

const ColorTitle = styled.span`
  color: #222121;
  font-size: 20px;
`;

const Color = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bg};
  cursor: pointer;
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const SizeTitle = styled.span`
  color: #222121;
  font-size: 20px;
`;

const Select = styled.select`
  cursor: pointer;
  outline: none;
  padding: 5px;
`;

const Option = styled.option``;

const CartContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 10px 0;
  margin: 20px 0;
`;

const AddContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const DecrementButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding-bottom: 4px;
  font-size: 30px;
  transition: all 0.2s ease;
  padding: 0 6px;
  &:hover {
    transform: scale(1.2);
  }
`;

const Quantity = styled.span`
  border: 1px solid teal;
  padding: 7px;
  border-radius: 6px;
`;

const IncrementButton = styled.button`
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  padding: 0 6px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const Button = styled.button`
  border: 2px solid teal;
  padding: 10px;
  cursor: pointer;
  background: none;
  transition: all 0.2s ease;
  &:hover {
    background: #dcd6d666;
  }
`;

const Product = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={product10} />
      </ImageContainer>

      <InfoContainer>
        <Title>Denim Jumpsuit</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          magnam minima molestiae dolor odio soluta ipsa odit iure, consequatur
          vitae placeat, laudantium, similique assumenda praesentium iusto
          ducimus sed illo voluptatum.
        </Desc>
        <PriceContainer>
          <PriceCurrency>$</PriceCurrency>
          <Price>20</Price>
        </PriceContainer>
        <ProductVariantContainer>
          <ColorContainer>
            <ColorTitle>Color</ColorTitle>
            <Color bg={"#31113f"}></Color>
            <Color bg={"#65706f"}></Color>
            <Color bg={"#37313f"}></Color>
          </ColorContainer>
          <SizeContainer>
            <SizeTitle>Size</SizeTitle>
            <Select>
              <Option selected>XS</Option>
              <Option>L</Option>
              <Option>M</Option>
            </Select>
          </SizeContainer>
        </ProductVariantContainer>
        <CartContainer>
          <AddContainer>
            <DecrementButton>-</DecrementButton>
            <Quantity>1</Quantity>
            <IncrementButton>+</IncrementButton>
          </AddContainer>
          <Button>ADD TO CART</Button>
        </CartContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
