import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Logo = styled.div``;

const Image = styled.img`
  height: 30px;
`;

const Title = styled.div`
  padding: 12px 20px;
  letter-spacing: 1px;
  border-radius: 3px;
  background-color: teal;
  color: #fff;
  font-weight: bolder;
`;

const Desc = styled.p``;

const Success = () => {
  return (
    <Container>
      <MiniContainer>
        <Logo>
          <Image src="https://t4.ftcdn.net/jpg/04/37/58/33/360_F_437583308_HglTcJD8fsRAkwjZD8DJHkcHwmXaZ0ag.jpg" />
        </Logo>
        <Title>Successfull</Title>
        <Desc>
          Your order is being prepared. Thanks for choosing Lama Shop.
        </Desc>
      </MiniContainer>
    </Container>
  );
};

export default Success;
