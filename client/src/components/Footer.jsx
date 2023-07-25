import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";

const Container = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 50px;
`;

const SocialMediaInfo = styled.div`
  flex: 1;
  padding: 10px 30px;
`;

const SocialMediaTitle = styled.h2`
  margin: 20px 0;
`;

const SocialMediaDesc = styled.p`
  margin: 20px 0;
  letter-spacing: 2px;
  font-size: 12px;
`;

const SocialMediaLinks = styled.div`
  display: flex;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
  color: white;
  margin-right: 16px;
  cursor: pointer;
`;

const LinkInfo = styled.div`
  flex: 1;
  padding: 10px 30px;
`;

const LinkInfoTitle = styled.h3`
  margin: 20px 0;
`;

const LinkInfoLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const LinkInfoLink = styled.a`
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.4s ease;
  font-size: 12px;
  letter-spacing: 1px;
  &:hover {
    color: gray;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  padding: 10px 30px;
`;

const ContactInfoTitle = styled.h3`
  margin: 20px 0;
`;

const ContactDetails = styled.div``;

const ContactDetailsAddress = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ContactDetailsAddressParagraph = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
`;

const ContactDetailsNumber = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ContactDetailsNumberParagraph = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
`;

const ConatctDetailsEmail = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const ConatctDetailsEmailParagraph = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
`;

// const contactDetailsPayment = styled.div``;

const Footer = () => {
  return (
    <Container>
      <SocialMediaInfo>
        <SocialMediaTitle>LAMA.</SocialMediaTitle>
        <SocialMediaDesc>
          There are many variations of passages of lorem ipsum available. but
          the ajority suffered alteration in som eform. by injected humour, or
          randomised words which dont look even slightly believable
        </SocialMediaDesc>
        <SocialMediaLinks>
          <Icon bg={"rgb(22, 57, 129)"}>
            <FacebookIcon />
          </Icon>
          <Icon bg={"rgb(236,27,64)"}>
            <InstagramIcon />
          </Icon>
          <Icon bg={"rgb(46,150,233)"}>
            <TwitterIcon />
          </Icon>
          <Icon bg={"rgb(185,10,76)"}>
            <PinterestIcon />
          </Icon>
        </SocialMediaLinks>
      </SocialMediaInfo>

      <LinkInfo>
        <LinkInfoTitle>Useful Links</LinkInfoTitle>
        <LinkInfoLinks>
          <LinkInfoLink>Home</LinkInfoLink>
          <LinkInfoLink>Cars</LinkInfoLink>
          <LinkInfoLink>Man Fashion</LinkInfoLink>
          <LinkInfoLink>Women Fashion</LinkInfoLink>
          <LinkInfoLink>Accessories</LinkInfoLink>
          <LinkInfoLink>My Account</LinkInfoLink>
          <LinkInfoLink>Order Tracking</LinkInfoLink>
          <LinkInfoLink>Wishlist</LinkInfoLink>
          <LinkInfoLink>Wishlist</LinkInfoLink>
          <LinkInfoLink>Terms</LinkInfoLink>
        </LinkInfoLinks>
      </LinkInfo>

      <ContactInfo>
        <ContactInfoTitle>Contact</ContactInfoTitle>
        <ContactDetails>
          <ContactDetailsAddress>
            <LocationOnIcon style={{ cursor: "pointer" }} />
            <ContactDetailsAddressParagraph>
              {" "}
              622 Dixie path, South Tobinchester 98336
            </ContactDetailsAddressParagraph>
          </ContactDetailsAddress>
          <ContactDetailsNumber>
            <LocalPhoneIcon style={{ cursor: "pointer" }} />
            <ContactDetailsNumberParagraph>
              +1 234 56 78
            </ContactDetailsNumberParagraph>
          </ContactDetailsNumber>
          <ConatctDetailsEmail>
            <MailIcon style={{ cursor: "pointer" }} />
            <ConatctDetailsEmailParagraph>
              contact@lama.dev
            </ConatctDetailsEmailParagraph>
          </ConatctDetailsEmail>
          {/* <contactDetailsPayment></contactDetailsPayment> */}
        </ContactDetails>
      </ContactInfo>
    </Container>
  );
};

export default Footer;
