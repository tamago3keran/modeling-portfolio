import React from "react";
import { Container } from "@mui/material";
import { DenseAppBar } from "../Elements/Header/DenseAppBar";
import { ModelingList } from "../../features/modeling/components/ModelingList";

export const MainLayout: React.FC = () => {
  return (
    <>
      <DenseAppBar />
      <Container maxWidth="xl">
        <ModelingList />
      </Container>
    </>
  );
};
