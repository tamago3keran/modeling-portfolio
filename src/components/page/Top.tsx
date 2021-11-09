import React from "react";
import { Container, Grid } from "@mui/material";
import { DenseAppBar } from "../ui/DenseAppBar";
import { ModelingCard } from "../ui/ModelingCard";

const RESOURCE = [
  {
    name: "notebook",
  },
  {
    name: "house",
  },
];

export const Top: React.FC = () => {
  return (
    <>
      <DenseAppBar />
      <Container maxWidth="xl">
        <Grid container sx={{ py: 4 }} spacing={4}>
          {RESOURCE.map((resource, idx) => (
            <Grid item key={idx} lg={2} md={3} sm={4} xs={6}>
              <ModelingCard name={resource.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
