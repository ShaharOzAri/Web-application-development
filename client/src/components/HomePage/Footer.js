import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PhoneIcon from "@mui/icons-material/Phone";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import SellIcon from "@mui/icons-material/Sell";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>CONTACT US</Heading>
            <FooterLink>
              <FacebookShareButton
                url={"https://peing.net/ja/"}
                quote={"Onecklace jewelry"}
                hashtag={"#Onecklace"}
                description={"jewelry"}
                className="Demo__some-network__share-button"
              >
                <FacebookIcon size={30} />
                Facebook
              </FacebookShareButton>
            </FooterLink>
            <FooterLink href="#">
              <PhoneIcon sx={{ fontSize: "35px", color: "black" }}></PhoneIcon>
              Phone
            </FooterLink>

            <FooterLink href="#">
              <EmailIcon sx={{ fontSize: "35px", color: "black" }}></EmailIcon>
              Email
            </FooterLink>
          </Column>

          <Column>
            <Heading>ABOUT US</Heading>
            <FooterLink href="#">Our Mission</FooterLink>
            <FooterLink href="#">Sustainability</FooterLink>
            <FooterLink href="#">Stores</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </Column>
          <Column>
            <FooterLink>
              <GppGoodIcon
                sx={{ fontSize: "40px", color: "black" }}
              ></GppGoodIcon>
              SECURE PAYMENT
            </FooterLink>
            <FooterLink>
              <FlightTakeoffIcon
                sx={{ fontSize: "40px", color: "black" }}
              ></FlightTakeoffIcon>
              FREE SHIPPING ALL ORDERS
            </FooterLink>
            <FooterLink>
              <SellIcon sx={{ fontSize: "40px", color: "black" }}></SellIcon>
              BEST PRICES
            </FooterLink>
            <FooterLink>
              <AssignmentReturnIcon
                sx={{ fontSize: "40px", color: "black" }}
              ></AssignmentReturnIcon>
              SECURE PAYMENT
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Container>
        <div style={{ textAlign: "center", fontSize: "15px", color: "black" }}>
          Onecklace &copy;2022
        </div>
      </Container>
    </Box>
  );
};
export default Footer;

{
  /* <Column>
              <Heading>SUBSCRIBE OUR NEWSLETTER</Heading>
              <Form>
                <Email>
                  <input
                    style={{
                      padding: "15px 20px",
                      borderRadius: "5px",
                      fontSize: "18px",
                      color: "black",

                      marginTop: "0",
                    }}
                    type="text"
                    placeholder="Email address"
                    name="mail"
                    required
                  />
                </Email>
                <Button type="button" name="button">
                  Subscribe
                </Button>
              </Form>
                </Column>*/
}
