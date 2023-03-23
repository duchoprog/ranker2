import { Button, Container } from "@mui/material";

import React from "react";

export const HomePage: React.FC = () => {
  return (
    <Container sx={{ mt: 15 }} maxWidth="xl">
      <Button variant="contained">home</Button>
    </Container>
  );
};
