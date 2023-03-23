import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

const NavBar: React.FC<{}> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ height: 25 }}>
          <Container maxWidth="xl">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Stack direction="row" spacing="1em">
                  <Button variant="outlined">culin</Button>
                  <Button variant="contained">culin</Button>
                </Stack>
              </Grid>
              <Grid item>
                <Typography>culon </Typography>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
