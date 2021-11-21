import React, { forwardRef, useImperativeHandle, useState } from "react";
import { Modal } from "@mui/material";
import { styled } from "@mui/system";

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

const Container = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

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
      <Container onClose={onClose} open={open}>
        {children}
      </Container>
    );
  }
);
