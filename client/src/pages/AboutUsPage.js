import React from "react";
import Map from "../components/Map/Map";
import LocationCard from "../components/Map/LocationCard";
import { Container } from "@mui/system";
import LocationSection from "../components/Map/LocationSection";

export default function AboutUsPage() {
  return (
    <Container maxWidth='xxxl'>
      <LocationSection />
      <Map />
    </Container>
  );
}
