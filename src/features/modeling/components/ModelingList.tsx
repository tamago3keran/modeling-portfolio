import React, { useRef, useState } from "react";
import { Grid } from "@mui/material";
import { Card } from "../../../components/Elements/Card/Card";
import { Modeling } from "../../../features/modeling/components/Modeling";
import { CanvasWrapper } from "../../../components/Elements/Canvas/CanvasWrapper";
import {
  ModalHandler,
  ModalWrapper,
} from "../../../components/Elements/Modal/ModalWrapper";
import { RotateWrapper } from "../../../components/Animation/RotateWrapper";
import { getModelings } from "../api/getModelings";

export const ModelingList: React.FC = () => {
  const modalRef = useRef({} as ModalHandler);

  const [selectedModelingName, setSelectedModelingName] = useState<
    string | null
  >(null);

  const onClick = (modelingName: string | null) => {
    if (!modalRef) return;
    modalRef.current.onOpen();
    setSelectedModelingName(modelingName);
  };
  const onClose = () => {
    if (!modalRef) return;
    modalRef.current.onClose();
    setSelectedModelingName(null);
  };

  return (
    <>
      <Grid container sx={{ py: 4 }} spacing={4}>
        {getModelings().map((resource, idx) => (
          <Grid
            item
            key={idx}
            onClick={() => onClick(resource.name)}
            lg={2}
            md={3}
            sm={4}
            xs={6}
          >
            <Card>
              <CanvasWrapper>
                <Modeling name={resource.name} />
              </CanvasWrapper>
            </Card>
          </Grid>
        ))}
      </Grid>
      <ModalWrapper ref={modalRef} onClose={onClose}>
        <CanvasWrapper enableClick={true}>
          <RotateWrapper autoRotation={true}>
            <Modeling name={selectedModelingName} />
          </RotateWrapper>
        </CanvasWrapper>
      </ModalWrapper>
    </>
  );
};
