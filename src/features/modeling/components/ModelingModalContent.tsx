import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import { styled } from "@mui/system";
import PlayIcon from "@mui/icons-material/PlayCircleFilled";
import StopIcon from "@mui/icons-material/StopCircle";
import { Modeling } from "./Modeling";
import { CanvasWrapper } from "../../../components/Elements/Canvas/CanvasWrapper";
import { RotateWrapper } from "../../../components/Animation/RotateWrapper";

type Props = {
  modelingName: string | null;
};

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "inherit",
  height: "inherit",
});

const CanvasContainer = styled(Box)({
  width: "70vmin",
  height: "70vmin",
  border: "2px solid #eee",
  borderRadius: 20,
  marginBottom: "4vmin",
});

const ButtonsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "70vmin",
});

const RotateButton = styled(Button)({
  width: "34vmin",
});

export const ModelingModalContent: React.FC<Props> = ({ modelingName }) => {
  const [disabledClickStart, setDisabledClickStart] = useState<boolean>(true);
  const [disabledClickStop, setDisabledClickStop] = useState<boolean>(false);
  const [enableClick, setEnableClick] = useState<boolean>(false);
  const [autoRotation, setAutoRotation] = useState<boolean>(true);

  const onClickStart = () => {
    setDisabledClickStart(true);
    setDisabledClickStop(false);
    setEnableClick(false);
    setAutoRotation(true);
  };
  const onClickStop = () => {
    setDisabledClickStart(false);
    setDisabledClickStop(true);
    setEnableClick(true);
    setAutoRotation(false);
  };

  return (
    <Container>
      <CanvasContainer>
        <CanvasWrapper enableClick={enableClick}>
          <RotateWrapper autoRotation={autoRotation}>
            <Modeling name={modelingName} />
          </RotateWrapper>
        </CanvasWrapper>
      </CanvasContainer>
      <ButtonsContainer>
        <Stack direction="row" spacing={2}>
          <RotateButton
            disabled={disabledClickStart}
            onClick={onClickStart}
            variant="contained"
            startIcon={<PlayIcon />}
          >
            START
          </RotateButton>
          <RotateButton
            disabled={disabledClickStop}
            onClick={onClickStop}
            variant="contained"
            startIcon={<StopIcon />}
          >
            STOP
          </RotateButton>
        </Stack>
      </ButtonsContainer>
    </Container>
  );
};
