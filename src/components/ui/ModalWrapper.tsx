import React from "react";
import { Modal } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

type Props = {
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  children: JSX.Element;
};

export const ModalWrapper: React.FC<Props> = ({
  open = false,
  handleClose,
  children,
}) => {
  return (
    <Modal style={styles.container} open={open} onClose={handleClose}>
      {children}
    </Modal>
  );
};
