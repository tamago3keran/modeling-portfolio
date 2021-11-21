import React, { forwardRef } from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import { ModelingContainer } from "./ModelingContainer";

type Props = {
  name: string | null;
};

const Container = styled(Paper)({
  position: "absolute" as "absolute",
  width: "90vmin",
  height: "90vmin",
});

// Have to use forwardRef in the Modal component of Material UI
export const ModelingModalContent = forwardRef(({ name }: Props, ref) => {
  if (!name) return null;

  return (
    <Container>
      <ModelingContainer autoRotation={true} enableClick={true} name={name} />
    </Container>
  );
});
