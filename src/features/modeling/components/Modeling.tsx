import React, { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type Props = {
  name?: string | null;
};

export const Modeling: React.FC<Props> = ({ name }) => {
  const [data, setData] = useState({});
  const { scene } = useLoader(GLTFLoader, `/models/${name}.gltf`);

  useEffect(() => {
    setData(scene.clone());
  }, [scene]);

  return <primitive object={data} />;
};
