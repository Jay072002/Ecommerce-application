import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://wallpapercave.com/wp/wp11379909.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 62vh;
  width: 50vw;
  background-color: #fff;
  padding: 20px;
  opacity: 0.9;
`;

const Title = styled.span`
  margin: 10px 0;
  font-size: 30px;
  color: #313030;
  font-weight: 300;
`;

const Form = styled.form``;

const Wrapper = styled.div`
  display: grid;
  padding: 20px 0;
  gap: 26px;
  grid-template-columns: repeat(2, 1fr);
`;

const InputName = styled.input`
  padding: 12px;
  outline: none;
`;

const InputLastName = styled.input`
  padding: 12px;
  outline: none;
`;

const Username = styled.input`
  padding: 12px;
  outline: none;
`;

const Email = styled.input`
  padding: 12px;
  outline: none;
`;

const Password = styled.input`
  padding: 12px;
  outline: none;
`;

const ConfirmPassword = styled.input`
  padding: 12px;
  outline: none;
`;

const Agreement = styled.p`
  margin: 15px 0;
  letter-spacing: 1px;
`;

const Bold = styled.span`
  font-weight: bolder;
`;

const LoginHelper = styled.div`
  display: flex;
  align-items: center;
`;

const LoginContainer = styled.div``;

const Button = styled.button`
  background: #cfcbcb;
  padding: 15px 60px;
  margin: 3px 10px;
  border: none;
  cursor: pointer;
`;

const Login = styled(Link)`
  text-decoration: none;
  color: teal;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      if (data.isRegister) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer>
      <Container>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={onSubmit}>
          <Wrapper>
            <InputName
              placeholder="first name"
              value={formData.fname}
              onChange={(e) => {
                setFormData({ ...formData, firstname: e.target.value });
              }}
            ></InputName>
            <InputLastName
              placeholder="last name"
              value={formData.lname}
              onChange={(e) => {
                setFormData({ ...formData, lastname: e.target.value });
              }}
            ></InputLastName>
            <Username
              placeholder="username"
              value={formData.username}
              onChange={(e) => {
                setFormData({ ...formData, username: e.target.value });
              }}
            ></Username>
            <Email
              placeholder="email"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            ></Email>
            <Password
              placeholder="password"
              value={formData.password}
              onChange={(e) => {
                setFormData({ ...formData, password: e.target.value });
              }}
            ></Password>
            <ConfirmPassword
              placeholder="confirm password"
              value={formData.confirmpassword}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  confirmpassword: e.target.value,
                });
              }}
            ></ConfirmPassword>
          </Wrapper>
          <Agreement>
            By creating account. I consent to the processing of my personal data
            in accordance with the <Bold>PRIVACY POLICY</Bold>
          </Agreement>
          <LoginHelper>
            <Button type="submit">CREATE</Button>
            <LoginContainer>
              ALREADY HAVE AN ACCOUNT? <Login to="/login">LOGIN</Login>
            </LoginContainer>
          </LoginHelper>
        </Form>
      </Container>
    </MainContainer>
  );
};

export default Register;
