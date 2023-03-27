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

  const dataLogin= (e:React.ChangeEvent<HTMLInputElement>)=>{
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e:React.FormEvent<HTMLInputElement>)=>{
    e.preventDefault()
    console.log(loginData)

  }



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
              onSubmit={handleSubmit}
              display="flex"
              flexDirection="column"
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                name="username"
                label="email"
                type="email"
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
                />
              <TextField
              name="password"
                margin="normal"
                label="password"
                type="password"
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
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
