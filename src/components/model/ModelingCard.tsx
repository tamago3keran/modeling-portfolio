import React from "react";
import { Paper } from "@mui/material";
import { ModelingContainer } from "./ModelingContainer";

type Props = {
  name: string;
};

export const ModelingCard: React.FC<Props> = (props) => {
  return (
    <Paper sx={{ height: 200 }}>
      <ModelingContainer name={props.name} />
    </Paper>
  );
};
