import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export interface ModalHandler {
  onClose: () => void;
  onOpen: () => void;
}

type Props = {
  onClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
  children: JSX.Element;
};

export const ModalWrapper = forwardRef<ModalHandler, Props>(
  ({ onClose, children }, ref) => {
    const [open, setOpen] = useState(false);

    useImperativeHandle(ref, () => ({
      onOpen: () => {
        setOpen(true);
      },
      onClose: () => {
        setOpen(false);
      },
    }));

    return (
      <Modal onClose={onClose} open={open} style={styles.container}>
        {children}
      </Modal>
    );
  }
);
