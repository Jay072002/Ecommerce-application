import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://wallpapercave.com/wp/wp11379937.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 25vw;
  width: 38vw;
  background: #fff;
  opacity: 0.9;
  padding: 20px;
`;

const Title = styled.span`
  margin: 10px 0;
  font-size: 30px;
  color: #313030;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
`;

const Username = styled.input`
  padding: 12px;
  outline: none;
`;

const Password = styled.input`
  padding: 12px;
  outline: none;
`;

const Button = styled.button`
  width: 10vw;
  padding: 15px;
  cursor: pointer;
  border: none;
  color: #fff;
  background: teal;
`;

const LoginHelper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ForgotPassword = styled(Link)`
  color: #000000c8;
`;

const Register = styled(Link)`
  color: #000000c8;
`;

const Login = () => {
  return (
    <MainContainer>
      <Container>
        <Title>SIGN IN</Title>
        <Form>
          <Username placeholder="username"></Username>
          <Password placeholder="password"></Password>
          <Button>LOGIN</Button>
          <LoginHelper>
            <ForgotPassword>DO NOT REMEMBER PASSWORD?</ForgotPassword>
            <Register to="/register">CREATE A NEW ACCOUNT</Register>
          </LoginHelper>
        </Form>
      </Container>
    </MainContainer>
  );
};

export default Login;
