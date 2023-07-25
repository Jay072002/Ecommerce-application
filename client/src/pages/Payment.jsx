import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState, useNavigate } from "react";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 15px 30px;
  background: #000000ef;
  color: #fff;
  font-weight: bolder;
  cursor: pointer;
`;

const Payment = () => {
  const [stripeToken, setStripeToken] = useState(null);

  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res);
        navigate("/success", {
          state: res?.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Container>
      <StripeCheckout
        stripeKey="pk_test_51MrfKdSDLHWgEIhGaohFh08rKDpnpyVM6oMzWkunbhaTkb0nbQWVF1oNZ42oqvT6SkUu53E58ji2DQg1gdbeJuGG00hjd7Jr7Q"
        name="LAMA.CO"
        description="Thanks For Shopping"
        image="https://t4.ftcdn.net/jpg/04/37/58/33/360_F_437583308_HglTcJD8fsRAkwjZD8DJHkcHwmXaZ0ag.jpg"
        amount={2000}
        email
        shippingAddress
        billingAddress
        token={onToken}
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Payment;
