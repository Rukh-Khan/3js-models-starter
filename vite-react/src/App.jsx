import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles, Html, SpotLight } from "@react-three/drei";
import * as THREE from "three";

const SVGComponent = () => {
  return (
    <svg
      style={{
        // absolute positioning needs a relative parent to work, since the nearest parent is the <body> element,
        // the svg will be positioned relative to the body. If we wanted to position relative to the Canvas,
        // we would need to wrap the Canvas in a container with a relative position.
        position: "absolute",
        top: 0,
        left: 0,
        top: "15%",
        left: "15%",
        transform: "translate(-50%, -50%)",
        height: "150px",
        width: "auto",
      }}
      viewBox="131.074 57.627 76.878 116.919"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="rgba(var(--v-theme-mainText), 0.7)"
        d="M 203.901 173.237 C 201.826 173.003 199.756 172.768 197.682 172.534 C 197.604 172.542 197.526 172.549 197.444 172.546 C 189.533 172.339 181.729 171.432 173.983 169.839 C 172.076 169.448 172.471 166.174 174.447 166.393 C 180.272 167.038 186.095 167.682 191.92 168.327 C 180.389 158.304 169.264 147.807 161.787 134.249 C 153.209 118.683 151.088 100.53 157.155 83.694 C 157.432 82.924 158.631 83.225 158.401 84.038 C 153.506 101.339 155.963 119.183 165.198 134.577 C 173.295 148.081 185.346 159.538 197.858 168.983 L 197.861 168.983 C 194.26 165.334 191.877 160.655 191.127 155.393 C 190.799 153.1 194.311 152.115 194.635 154.424 C 195.557 161.014 199.057 166.475 204.807 169.893 C 206.221 170.741 205.752 173.448 203.901 173.237 Z"
        transform="matrix(0.99863, 0.052336, -0.052336, 0.99863, 6.958268, -9.22702)"
      />
      <text
        fill="rgba(var(--v-theme-buttonBorder), 0.9)"
        x="131.074"
        y="74.576"
        style={{
          fontFamily: "Segoe UI",
          fontSize: "15.8px",
          whiteSpace: "pre",
          fontWeight: 500,
        }}
      >
        spin me
      </text>
    </svg>
  );
};

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z+= 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color={"pink"} emissive={"black"} />

      //Sparkles component
      {/* <Sparkles
        count={100}
        size={6}
        speed={0.002}
        noise={0.02}
        color={"royalblue"}
      /> */}
    </mesh>
  );
};

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        padding: "0 5%",
      }}
    >
      <div
        style={{
          height: "500px",
          width: "500px",
          // border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <Canvas
          style={{ height: "100%", width: "100%", borderRadius: "10px" }}
          camera={{ position: [0, 0, 5], fov: 75 }}
        >
          <OrbitControls enableZoom={false} enablePan enableRotate />
          <directionalLight
            position={[1, 1, 1]}
            intensity={10}
            color={new THREE.Color(0x9cda6)}
          />
          <ambientLight intensity={0.5} />
          {/* <color attach="background" args={[new THREE.Color("#f0f0f0")]} /> */}
          <RotatingCube />
          <Html fullscreen>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <SVGComponent />
            </div>
          </Html>
        </Canvas>
      </div>

      <div
        style={{
          height: "500px",
          width: "500px",
          // border: "1px solid black",
          borderRadius: "10px",
          fontSize: "3.2em",
          lineHeight: "1.1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 
          style={{
            color: "yellow",
            textStroke: "2px black",
            WebkitTextStroke: "2px black",
            textFillColor: "pink",
            WebkitTextFillColor: "pink"
          }}
        >
          Howdy ! ThiS iS Rukh.
        </h1>
      </div>
    </div>
  );
};

export default App;
