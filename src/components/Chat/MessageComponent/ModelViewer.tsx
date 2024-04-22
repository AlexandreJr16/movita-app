import { Canvas } from "@react-three/fiber/native";
import { Gltf } from "@react-three/drei/native";
import React, { Suspense } from "react";
import { View } from "react-native";

export default function ModelViewer({ base64 }) {
  return (
    <View style={{ width: 250, height: 250 }}>
      <Canvas style={{ flex: 1 }} camera={{ position: [-2, 2.5, 5], fov: 30 }}>
        <color attach="background" args={["#512DA8"]} />

        <Suspense>
          <group>
            {/* <Gltf src={model}></Gltf> */}
            <mesh>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="hotpink" />
            </mesh>
          </group>
        </Suspense>
      </Canvas>
    </View>
  );
}
