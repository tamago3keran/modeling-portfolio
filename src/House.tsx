import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cube_1: THREE.Mesh;
    Cube_2: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    立方体: THREE.Mesh;
    円: THREE.Mesh;
    立方体001: THREE.Mesh;
    立方体002: THREE.Mesh;
  };
  materials: {
    ["マテリアル.002"]: THREE.MeshStandardMaterial;
    ["マテリアル.003"]: THREE.MeshStandardMaterial;
    ["マテリアル.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    マテリアル: THREE.MeshStandardMaterial;
  };
};

export const House: React.FC = () => {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF("/house.gltf") as GLTFResult;
  return (
    <group ref={group} dispose={null}>
      <mesh
        geometry={nodes.Cube_1.geometry}
        material={materials["マテリアル.002"]}
      />
      <mesh
        geometry={nodes.Cube_2.geometry}
        material={materials["マテリアル.003"]}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0, -0.31, 0]}
        scale={1.24}
      />
      <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
      <mesh
        geometry={nodes.立方体.geometry}
        material={nodes.立方体.material}
        position={[0.74, 1.32, 0]}
        scale={[0.23, -0.6, 0.23]}
      />
      <mesh
        geometry={nodes.円.geometry}
        material={materials.マテリアル}
        position={[0, -1, 0]}
        scale={2.5}
      />
      <mesh
        geometry={nodes.立方体001.geometry}
        material={nodes.立方体001.material}
        position={[0, -0.93, 1.16]}
        scale={[0.38, 0.15, 0.15]}
      />
      <mesh
        geometry={nodes.立方体002.geometry}
        material={nodes.立方体002.material}
        position={[0, -1.04, 1.46]}
        scale={[0.38, 0.15, 0.15]}
      />
    </group>
  );
};

useGLTF.preload("/house.gltf");
