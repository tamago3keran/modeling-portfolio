import React, { Suspense } from "react";
import { Paper } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { selectModelingComponent } from "../../lib/SelectModelingComponent";

type Props = {
  name: string;
};

export const ModelingCard: React.FC<Props> = (props) => {
  const Model = selectModelingComponent(props.name);

  return (
    <Paper sx={{ height: 200 }}>
      <Canvas>
        <pointLight position={[5, 5, 5]} />
        <PerspectiveCamera makeDefault position={[4, 5, 5]} />
        <Suspense fallback={null}>{Model}</Suspense>
        <OrbitControls />
      </Canvas>
    </Paper>
  );
};
