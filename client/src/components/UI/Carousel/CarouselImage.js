import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function CarouselImage(props) {
  return (
    <Paper>
      <Container maxWidth="xl" sx={{ bgcolor: "#eaece5" }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            maxHeight: { md: 550 },
          }}
          src={props.image.src}
          alt={props.image.alt}
        />
      </Container>
    </Paper>
  );
}

export default CarouselImage;
