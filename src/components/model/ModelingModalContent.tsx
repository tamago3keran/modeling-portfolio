import React from "react";
import { Paper } from "@mui/material";
import { Modeling } from "./Modeling";

const style = {
  position: "absolute" as "absolute",
  top: "10%",
  left: "10%",
  width: "80%",
  height: "80%",
};

type Props = {
  name: string | null;
};

export const ModelingModalContent: React.FC<Props> = (props) => {
  if (!props.name) return null;

  return (
    <Paper sx={style}>
      <Modeling name={props.name} />
    </Paper>
  );
};
