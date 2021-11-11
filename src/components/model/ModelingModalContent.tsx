import React from "react";
import { Paper } from "@mui/material";
import { Modeling } from "./Modeling";

const styles = {
  container: {
    position: "absolute" as "absolute",
    width: "50vw",
    height: "50vw",
  },
};

type Props = {
  name: string | null;
};

export const ModelingModalContent: React.FC<Props> = ({ name }) => {
  if (!name) return null;

  return (
    <Paper style={styles.container}>
      <Modeling name={name} enableClick={true} />
    </Paper>
  );
};
