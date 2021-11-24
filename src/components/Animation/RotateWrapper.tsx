import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

type Props = {
  autoRotation?: boolean;
  children: JSX.Element;
};

export const RotateWrapper: React.FC<Props> = ({
  autoRotation = false,
  children,
}) => {
  const meshRef = useRef({} as any);

  useFrame(({ clock }) => {
    if (!autoRotation) return;
    meshRef.current.rotation.y = clock.getElapsedTime();
  });

  return <mesh ref={meshRef}>{children}</mesh>;
};
