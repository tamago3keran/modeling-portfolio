import React from "react";
import { Paper, Slide } from "@mui/material";
import { styled } from "@mui/system";
import { ModelingContainer } from "./ModelingContainer";

type Props = {
  name: string;
};

const Container = styled(Paper)({
  height: 200,
});

export const ModelingCard: React.FC<Props> = ({ name }) => {
  return (
    <Slide direction={"up"} in={true} timeout={400}>
      <Container>
        <ModelingContainer name={name} />
      </Container>
    </Slide>
  );
};
