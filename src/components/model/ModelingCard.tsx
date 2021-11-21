import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { ModelingContainer } from "./ModelingContainer";

type Props = {
  name: string;
};

const Container = styled(Paper)({
  height: 200,
});

export const ModelingCard: React.FC<Props> = (props) => {
  return (
    <Container>
      <ModelingContainer name={props.name} />
    </Container>
  );
};
