import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

type Props = {
  children: JSX.Element;
};

const Container = styled(Paper)({
  height: 200,
});

export const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
