import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Log In
            </Typography>
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                label="email"
                sx={{ mt: 2, mb: 1.5 }}
                required
              />
              <TextField
                margin="normal"
                label="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
              />
              <Button type="submit" variant="contained" sx={{ mt: 1.5, mb: 3 }}>
                send
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
