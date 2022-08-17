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
                url={
                  "https://www.facebook.com/profile.php?id=100083280215522&notif_id=1660661579838743&notif_t=profile_plus_admin_invite&ref=notif"
                }
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
              <PhoneIcon sx={{ fontSize: "30px", color: "black" }}></PhoneIcon>
              Phone
            </FooterLink>

            <FooterLink href="#">
              <EmailIcon sx={{ fontSize: "30px", color: "black" }}></EmailIcon>
              Email
            </FooterLink>
          </Column>

          <Column>
            <Heading>ABOUT US</Heading>
            <FooterLink>Our Mission</FooterLink>
            <FooterLink>Sustainability</FooterLink>
            <FooterLink>Stores</FooterLink>
            <FooterLink>Careers</FooterLink>
          </Column>
          <Column>
            <FooterLink>
              <GppGoodIcon
                sx={{ fontSize: "35px", color: "black" }}
              ></GppGoodIcon>
              SECURE PAYMENT
            </FooterLink>
            <FooterLink>
              <FlightTakeoffIcon
                sx={{ fontSize: "35px", color: "black" }}
              ></FlightTakeoffIcon>
              FREE SHIPPING ALL ORDERS
            </FooterLink>
            <FooterLink>
              <SellIcon sx={{ fontSize: "35px", color: "black" }}></SellIcon>
              BEST PRICES
            </FooterLink>
            <FooterLink>
              <AssignmentReturnIcon
                sx={{ fontSize: "35px", color: "black" }}
              ></AssignmentReturnIcon>
              SECURE PAYMENT
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Container>
        <div
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "white",
            background: "black",
          }}
        >
          Onecklace &copy;2022
        </div>
      </Container>
    </Box>
  );
};
export default Footer;
