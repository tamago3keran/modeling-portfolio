import React, { useRef, useState } from "react";
import { Container, Grid } from "@mui/material";
import { DenseAppBar } from "../ui/DenseAppBar";
import { ModelingCard } from "../model/ModelingCard";
import { ModalHandler, ModalWrapper } from "../ui/ModalWrapper";
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
  const modalRef = useRef({} as ModalHandler);

  const [selectedModelingName, setSelectedModelingName] = useState<
    string | null
  >(null);

  const onClick = (modelingName: string | null) => {
    if (!modalRef) return;
    modalRef.current.onOpen();
    setSelectedModelingName(modelingName);
  };
  const onClose = () => {
    if (!modalRef) return;
    modalRef.current.onClose();
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
              key={idx}
              onClick={() => onClick(resource.name)}
              lg={2}
              md={3}
              sm={4}
              xs={6}
            >
              <ModelingCard name={resource.name} />
            </Grid>
          ))}
        </Grid>
        <ModalWrapper ref={modalRef} onClose={onClose}>
          <ModelingModalContent name={selectedModelingName} />
        </ModalWrapper>
      </Container>
    </>
  );
};
