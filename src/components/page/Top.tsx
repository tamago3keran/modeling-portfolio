import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { DenseAppBar } from "../ui/DenseAppBar";
import { ModelingCard } from "../model/ModelingCard";
import { ModalWrapper } from "../ui/ModalWrapper";
import { ModelingModalContent } from "../model/ModelingModalContent";

const RESOURCE = [
  {
    name: "notebook",
  },
  {
    name: "house",
  },
];

export const Top: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedModelingName, setSelectedModelingName] = useState<
    string | null
  >(null);
  const handleOpen = (modelingName: string | null) => {
    setOpen(true);
    setSelectedModelingName(modelingName);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedModelingName(null);
  };

  return (
    <>
      <DenseAppBar />
      <Container maxWidth="xl">
        <Grid container sx={{ py: 4 }} spacing={4}>
          {RESOURCE.map((resource, idx) => (
            <Grid
              item
              onClick={() => handleOpen(resource.name)}
              key={idx}
              lg={2}
              md={3}
              sm={4}
              xs={6}
            >
              <ModelingCard name={resource.name} />
            </Grid>
          ))}
        </Grid>
        <ModalWrapper open={open} handleClose={() => handleClose()}>
          <ModelingModalContent name={selectedModelingName} />
        </ModalWrapper>
      </Container>
    </>
  );
};
