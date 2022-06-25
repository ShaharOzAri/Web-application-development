import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Button,
  Email,
  Form,
} from "./FooterStyles.js";

const Footer = () => {
  return (
    <footer>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>CONTACT US</Heading>

              <FooterLink href="#">
                <FacebookIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></FacebookIcon>
                Facebook
              </FooterLink>
              <FooterLink href="#">
                <PhoneIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></PhoneIcon>
                Phone
              </FooterLink>
              <FooterLink href="#">
                <InstagramIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></InstagramIcon>
                Instagram
              </FooterLink>
              <FooterLink href="#">
                <EmailIcon
                  sx={{ fontSize: "35px", color: "black" }}
                ></EmailIcon>
                Email
              </FooterLink>
            </Column>
            <Column>
              <Heading>SUPPORT</Heading>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Shipping</FooterLink>
              <FooterLink href="#">Returns + Exchanges</FooterLink>
              <FooterLink href="#">Virtual Shopping</FooterLink>
              <FooterLink href="#">Jewelry Cares</FooterLink>
              <FooterLink href="#">Ring Sizer</FooterLink>
            </Column>
            <Column>
              <Heading>ABOUT US</Heading>
              <FooterLink href="#">Our Mission</FooterLink>
              <FooterLink href="#">Sustainability</FooterLink>
              <FooterLink href="#">Stores</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
            </Column>
            <Column>
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
            </Column>
          </Row>
        </Container>
        <Container>
          <div style={{ textAlign: "center" }}>
            <p>&copy; 2022 onecklace.</p>
          </div>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
