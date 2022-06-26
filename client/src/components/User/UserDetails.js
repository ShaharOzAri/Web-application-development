import { useAuth } from "../Utils/auth";
import { useNavigate } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { updateUser } from "../../controller/UserController";

export const UserDetails = () => {
  const auth = useAuth();
  var user = auth.user;
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateUser(user);
    if (response.status == 200) {
      auth.update(user);
      alert("user Details updated");
    } else {
      alert("somrthing went wrong");
    }
  };
  return (
    <Container sx={{ textAlign: "center", maxWidth: 200, bgcolor: "#e0d9cc" }}>
      <Box sx={{ my: 5 }}>
        <Typography sx={{ fontSize: 40, color: "black" }}>
          Welcom {auth.user.first_name}
        </Typography>
        <Button
          variant="contained"
          sx={{ mb: 2, color: "black" }}
          onClick={handleLogout}
        >
          LogOut
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  defaultValue={auth.user.first_name}
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={(event) =>
                    (user["first_name"] = event.target.value)
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  defaultValue={auth.user.last_name}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event) => (user["last_name"] = event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={auth.user.email}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => (user["email"] = event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  defaultValue={auth.user.password}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => (user["password"] = event.target.value)}
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, color: "black" }}
            >
              Update User Details
            </Button>
            <Grid
              container
              justifyContent="flex-end"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: 5,
              }}
            ></Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
