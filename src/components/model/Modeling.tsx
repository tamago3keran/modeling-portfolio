import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { selectModelingComponent } from "../../lib/SelectModelingComponent";

type Props = {
  autoRotation: boolean;
  name: string;
};

export const Modeling: React.FC<Props> = ({ autoRotation, name }) => {
  const Modeling = selectModelingComponent(name);
  const modelingRef = useRef({} as any);

  useFrame(({ clock }) => {
    if (!autoRotation) return;
    modelingRef.current.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={modelingRef}>
      <Suspense fallback={null}>{Modeling}</Suspense>
    </mesh>
  );
};
