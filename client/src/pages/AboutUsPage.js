import React from "react";
import Map from "../components/Map/Map";
import { Container } from "@mui/system";
import LocationSection from "../components/Map/LocationSection";
import AboutUsContent from "../components/Map/AboutUsContent";
import TitleDivider from "../components/UI/TitleDivider";

export default function AboutUsPage() {
  return (
    <Container maxWidth="xxxl">
      <TitleDivider Title="ABOUT US"></TitleDivider>
      <AboutUsContent />
      <LocationSection />
      <Map />
    </Container>
  );
}
