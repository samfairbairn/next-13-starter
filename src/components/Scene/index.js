"use client"

import { OrbitControls } from "@react-three/drei"
import { Environment, MeshDistortMaterial, PerspectiveCamera, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
// import { useLoader } from "@react-three/fiber"
import React, { Suspense } from "react"

// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { Raf } from "./raf"

// import { TextureLoader } from "three/src/loaders/TextureLoader"

const Scene = () => {
  return (
    <Canvas className="canvas" dpr={[1, 2]}>
      <Shapes />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

const Shapes = () => {
  // const obj = useLoader(OBJLoader, "/models/p-compressed.obj")
  // const { nodes } = useGLTF("/models/p.gltf")
  const { nodes } = useGLTF("/models/p-compressed.glb")
  console.log("nodes", nodes)

  // const [colorMap, normalMap, roughnessMap] = useLoader(TextureLoader, [
  //   "/tex/GSG_TechProducts_Rubber_Soft_basecolor.jpg",
  //   "/tex/GSG_TechProducts_Rubber_Soft_normal.jpg",
  //   "/tex/GSG_TechProducts_Rubber_Soft_roughness.jpg",
  // ])

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <ambientLight intensity={1} />
        <pointLight position-z={-15} intensity={1} color="#F8C069" />
      </PerspectiveCamera>
      <Raf />
      <Suspense fallback={null}>
        {/* <group>
          <mesh
            castShadow
            receiveShadow
            geometry={obj.children[0].geometry}
            position={[0, 0, -2]}
            scale={0.1}
          >
            <meshPhongMaterial
              distort={0.1}
              speed={1}
              color={"#E8B059"}
              envMapIntensity={0.1}
              metalness={1}
            />
          </mesh>
        </group> */}

        <group>
          {/* <primitive object={gltf.scene} /> */}
          <mesh
            castShadow
            receiveShadow
            // geometry={nodes.p2.geometry}
            geometry={nodes.p2_1.geometry}
            scale={3}
          >
            <MeshDistortMaterial
              distort={0.1}
              speed={5}
              color={"#E8B059"}
              envMapIntensity={1}
              clearcoat={1}
              clearcoatRoughness={0}
              metalness={0.1}
              // colorMap={colorMap}
              // normalMap={normalMap}
              // roughnessMap={roughnessMap}
            />
          </mesh>
        </group>

        <Environment preset="warehouse" />
      </Suspense>
    </>
  )
}

export default Scene
