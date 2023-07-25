import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Container = styled.div`
  display: flex;
  background-color: #fcf1ed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: bolder;
  margin: 17px 0;
`;

const Desc = styled.p`
  letter-spacing: 3px;
  margin: 17px 0;
`;

const MailContainer = styled.div`
  margin: 17px 0;
  display: flex;
`;

const BoxContainer = styled(Box)`
  width: 35vw;
`;

const Input = styled(TextField)`
  width: 35vw;
  padding: 8px 10px;
  margin: 0 2px;
`;

const Icon = styled.button`
  padding: 2px 20px;
  cursor: pointer;
  background: teal;
  border: none;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <MailContainer>
        <BoxContainer
          component="form"
          //   sx={{
          //     "& > :not(style)": { m: 1, width: "25ch" },
          //   }}
          noValidate
          autoComplete="on"
        >
          <Input id="outlined-basic" label="Enter email  " variant="outlined" />
        </BoxContainer>
        <Icon>
          <SendIcon />
        </Icon>
      </MailContainer>
    </Container>
  );
};

export default Newsletter;
