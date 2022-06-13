import { Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function SliderImage(props) {
  return (
    <Paper>
      <Container maxWidth="xl" sx={{ bgcolor: "#eaece5" }}>
        <Box
          component="img"
          sx={{
            height: 550,
            width: "100%",
            maxHeight: { md: 550 },
          }}
          src={props.item.src}
          alt={props.item.alt}
        />
      </Container>
    </Paper>
  );
}

export default SliderImage;
