import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 30px 0;
`;

const Title = styled.div`
  text-align: ${(props) => (props.type === "summary" ? "left" : "center")};
  /* padding: 20px; */
  font-size: ${(props) => (props.type === "summary" ? "30px" : "35px")};
  letter-spacing: 1px;
  color: #353333db;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
`;

const TopButton = styled.button`
  width: ${(props) => (props.btn === "checkout" ? "100%" : "12vw")};
  font-weight: 500;
  padding: 10px 7px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "white")};
  color: ${(props) => (props.type === "filled" ? "white" : "black")};
  cursor: pointer;
`;

const TopTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const TopText = styled.span``;

const Bottom = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px 20px;
`;

const Wrapper = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const ProductWrapper = styled.div`
  /* padding: 20px 0; */
  display: flex;
`;

const ProductContainer = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 260px;
  /* flex: 1; */
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-left: 30px;
  justify-content: center;
`;

const ProductName = styled.div``;

const Span = styled.span`
  font-weight: bolder;
`;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  background: black;
  border-radius: 50%;
`;

const ProductSize = styled.div``;

const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 70px 50px 0 0;
  gap: 20px;
`;

const IncDecContainer = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const Button = styled.button`
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

const Quantity = styled.span`
  font-size: 20px;
`;

const PriceInfo = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
  margin-right: 10px;
`;

const Currency = styled.span`
  font-size: 30px;
  color: gray;
`;

const Price = styled.span`
  font-size: 30px;
`;

const Hr = styled.hr`
  opacity: 0.5;
`;

const SummaryMainContainer = styled.div`
  flex: 1;
  padding: 15px 7px 15px 50px;
`;

const SummaryContainer = styled.div`
  -webkit-box-shadow: 1px 6px 8px 3px rgba(230, 225, 230, 1);
  -moz-box-shadow: 1px 6px 8px 3px rgba(230, 225, 230, 1);
  box-shadow: 1px 6px 8px 3px rgba(230, 225, 230, 1);
  padding: 15px 20px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SubSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 12px;
`;

const SubSummaryContainerTitle = styled.div`
  font-size: ${(props) => (props.type === "total" ? "25px" : "20px")};
  color: ${(props) => (props.type === "total" ? "#000" : "#2f2d2d")};
`;

const SubSummaryContainerPrice = styled.span``;

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/payment");
  };

  return (
    <>
      <Container>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton type="transparent">CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={handleCheckout}>
            CHECKOUT NOW
          </TopButton>
        </Top>

        <Bottom>
          <Wrapper>
            <ProductWrapper>
              <ProductContainer>
                <Image src="https://static.wixstatic.com/media/ed506e_e47b004e5414486486e256cb717d305c~mv2.png/v1/fill/w_1822,h_1822,al_c/ed506e_e47b004e5414486486e256cb717d305c~mv2.png" />
                <ProductInfoContainer>
                  <ProductName>
                    <Span>Product: </Span> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <Span>ID: </Span> 93813718293
                  </ProductId>
                  <ProductColor>s</ProductColor>
                  <ProductSize>
                    <Span>Size: </Span> M
                  </ProductSize>
                </ProductInfoContainer>
              </ProductContainer>
              <PriceContainer>
                <IncDecContainer>
                  <Button>-</Button>
                  <Quantity>2</Quantity>
                  <Button>+</Button>
                </IncDecContainer>
                <PriceInfo>
                  <Currency>$</Currency>
                  <Price>30</Price>
                </PriceInfo>
              </PriceContainer>
            </ProductWrapper>
            <Hr />

            <ProductWrapper>
              <ProductContainer>
                <Image src="https://static.wixstatic.com/media/ed506e_e47b004e5414486486e256cb717d305c~mv2.png/v1/fill/w_1822,h_1822,al_c/ed506e_e47b004e5414486486e256cb717d305c~mv2.png" />
                <ProductInfoContainer>
                  <ProductName>
                    <Span>Product: </Span> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <Span>ID: </Span> 93813718293
                  </ProductId>
                  <ProductColor>s</ProductColor>
                  <ProductSize>
                    <Span>Size: </Span> M
                  </ProductSize>
                </ProductInfoContainer>
              </ProductContainer>
              <PriceContainer>
                <IncDecContainer>
                  <Button>-</Button>
                  <Quantity>2</Quantity>
                  <Button>+</Button>
                </IncDecContainer>
                <PriceInfo>
                  <Currency>$</Currency>
                  <Price>30</Price>
                </PriceInfo>
              </PriceContainer>
            </ProductWrapper>
            <Hr />
          </Wrapper>

          <SummaryMainContainer>
            <SummaryContainer>
              <Title type="summary">ORDER SUMMARY</Title>
              <SubSummaryContainer>
                <SubSummaryContainerTitle>Subtotal</SubSummaryContainerTitle>
                <SubSummaryContainerPrice>$80</SubSummaryContainerPrice>
              </SubSummaryContainer>
              <SubSummaryContainer>
                <SubSummaryContainerTitle>
                  Estimated Shipping
                </SubSummaryContainerTitle>
                <SubSummaryContainerPrice>$5.90</SubSummaryContainerPrice>
              </SubSummaryContainer>
              <SubSummaryContainer>
                <SubSummaryContainerTitle>
                  Shipping Discount
                </SubSummaryContainerTitle>
                <SubSummaryContainerPrice>$-5.90</SubSummaryContainerPrice>
              </SubSummaryContainer>
              <SubSummaryContainer>
                <SubSummaryContainerTitle type="total">
                  Total
                </SubSummaryContainerTitle>
                <SubSummaryContainerPrice>$80</SubSummaryContainerPrice>
              </SubSummaryContainer>
              <TopButton type="filled" btn="checkout" onClick={handleCheckout}>
                CHECKOUT NOW
              </TopButton>
            </SummaryContainer>
          </SummaryMainContainer>
        </Bottom>
      </Container>
    </>
  );
};

export default Cart;
