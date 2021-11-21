import React, { forwardRef } from "react";
import { Paper } from "@mui/material";
import { Modeling } from "./Modeling";

const styles = {
  container: {
    position: "absolute" as "absolute",
    width: "90vmin",
    height: "90vmin",
  },
};

type Props = {
  name: string | null;
};

// Have to use forwardRef in the Modal component of Material UI
export const ModelingModalContent = forwardRef(({ name }: Props, ref) => {
  if (!name) return null;

  return (
    <Paper style={styles.container}>
      <Modeling enableClick={true} name={name} />
    </Paper>
  );
});
