import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube001_3: THREE.Mesh;
    立方体: THREE.Mesh;
    テキスト: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["マテリアル.001"]: THREE.MeshStandardMaterial;
    ["マテリアル.002"]: THREE.MeshStandardMaterial;
    マテリアル: THREE.MeshStandardMaterial;
  };
};

export const Notebook: React.FC = () => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/notebook.gltf") as GLTFResult;
  return (
    <group ref={group} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={nodes.Cube.material} />
      <group position={[0, 0.81, -1.22]} rotation={[1.09, 0, 0]}>
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={nodes.Cube001_1.material}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materials["マテリアル.001"]}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={materials["マテリアル.002"]}
        />
      </group>
      <mesh
        geometry={nodes.立方体.geometry}
        material={materials.マテリアル}
        position={[-0.89, 0.04, -0.52]}
        scale={[0.07, 0.03, 0.07]}
      />
      <mesh
        geometry={nodes.テキスト.geometry}
        material={nodes.テキスト.material}
        position={[-0.17, 0.1, -0.8]}
        rotation={[1.08, 0, 0]}
        scale={[0.06, 0.06, 0.06]}
      />
    </group>
  );
};

useGLTF.preload("/notebook.gltf");
