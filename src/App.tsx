import React from "react";
import { Container, Grid, Paper } from "@mui/material";
import { DenseAppBar } from "./DenseAppBar";
import { ModelingCard } from "./ModelingCard";

function App() {
  return (
    <>
      <DenseAppBar />
      <Container maxWidth="xl">
        <Grid container sx={{ py: 4 }} spacing={4}>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Paper style={{ height: 200 }}>
              <ModelingCard name={"notebook"} />
            </Paper>
          </Grid>
          <Grid item lg={2} md={3} sm={4} xs={6}>
            <Paper style={{ height: 200 }}>
              <ModelingCard name={"house"} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
