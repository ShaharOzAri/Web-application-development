import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Divider } from "@mui/material";

const theme = createTheme();

export default function StandardProductPage() {
  const [Length, setLength] = React.useState("");

  const handleChangeLength = (event) => {
    setLength(event.target.value);
  };

  return (
    <Container maxWidth="xxxl">
      <Grid
        container
        spacing={5}
        columns={12}
        alignItems="center"
        justify="center"
        mt="auto"
      >
        <Grid
          item
          xs={12}
          md={6}
          alignItems="center"
          justify="center"
          sx={{ mb: "250px" }}
        >
          <ImageList sx={{ width: 720, height: 720 }} cols={2} rowHeight={0}>
            {imageData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} md={6} alignItems="center" justify="center">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
              sx={{
                mb: 45,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                component="h1"
                variant="h5"
                color={"black"}
                align="center"
              >
                Classic Name Necklace
              </Typography>
              <Typography
                component="h2"
                variant="h6"
                color={"black"}
                fontWeight="bold"
                align="center"
              >
                $29.90
              </Typography>
              <Divider sx={{ my: "10px" }} />
              <Typography
                component="h2"
                color={"black"}
                fontWeight="bold"
                align="center"
              >
                Product Description
              </Typography>
              <Typography component="h3" color={"black"} align="center">
                Looking for that perfect way to showcase your imaginative
                personality? Our iconic Classic Name Necklace is a bestseller
                for a good reason, with its simple and stylized classic font and
                three different sizes available to suit your style. Crafted from
                the finest solid Sterling Silver, 24K Gold Plating, Rose Gold,
                14K Solid Gold and White Gold, this Name Necklace comes with a
                quality chain in the length of your choice. Custom made with any
                name or word of your choice, we will ensure your name necklace
                is crafted to meet the highest standards of workmanship and
                style. Pair your name necklace with any outfit, to make your
                style shine through and boost your confidence to the next level.
                Also available as Rings and Bracelets.
              </Typography>
              <Divider sx={{ my: "10px" }} />
              <Typography
                component="h2"
                color={"black"}
                fontWeight="bold"
                align="center"
                mt="7px"
              >
                Please Fill Your Product Details ♥
              </Typography>
              <Box
                component="form"
                //onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Name/Word"
                  label="Please Enter Name/Word"
                  type="Name/Word"
                  id="Name/Word"
                />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth required>
                    <InputLabel id="Length">
                      Please Select Chain Length
                    </InputLabel>
                    <Select
                      labelId="Length"
                      id="Length"
                      value={Length}
                      label="Length"
                      onChange={handleChangeLength}
                    >
                      <MenuItem value={18}>18"</MenuItem>
                      <MenuItem value={20}>20"</MenuItem>
                      <MenuItem value={22}>22"</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, bgcolor: "black", height: "55px" }}
                >
                  Add To Cart
                </Button>
              </Box>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Container>
  );
}

const imageData = [
  {
    img: "https://cdn.onecklace.com/products/1330/product_1330_2_730.jpeg",
    title: "Breakfast",
  },
  {
    img: "https://cdn.onecklace.com/products/1330/product_1330_information_3_730.jpeg",
    title: "Burger",
  },
  {
    img: "https://cdn.onecklace.com/products/1330/product_1330_model_1_730.jpeg",
    title: "Camera",
  },
  {
    img: "https://cdn.onecklace.com/products/1330/product_1330_main_material_730.jpeg",
    title: "Coffee",
  },
];
