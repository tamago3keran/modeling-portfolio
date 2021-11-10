import React from "react";
import { Modal } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: (event: React.MouseEvent<HTMLInputElement>) => void;
  children: JSX.Element;
};

export const ModalWrapper: React.FC<Props> = (props) => {
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      {props.children}
    </Modal>
  );
};
