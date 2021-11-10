import React from "react";
import { Paper } from "@mui/material";
import { Modeling } from "./Modeling";

type Props = {
  name: string;
};

export const ModelingCard: React.FC<Props> = (props) => {
  return (
    <Paper sx={{ height: 200 }}>
      <Modeling name={props.name} />
    </Paper>
  );
};
