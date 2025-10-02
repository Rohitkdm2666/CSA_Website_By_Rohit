// Logo3D.jsx
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Svg } from "@react-three/drei";
import { ExtrudeGeometry } from "three";

function Logo3DShape({ url }) {
  return (
    <Svg
      src={url}
      scale={0.05}
      position={[0, 0, 0]}
      extrude={{ depth: 0.3, bevelEnabled: false }} // gives it thickness
    >
      <meshStandardMaterial color="orangered" />
    </Svg>
  );
}

export default function Logo3D() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Logo3DShape url="/logo.svg" /> {/* Put your SVG in public/logo.svg */}
        </Suspense>
        <OrbitControls enableZoom enableRotate />
      </Canvas>
    </div>
  );
}
