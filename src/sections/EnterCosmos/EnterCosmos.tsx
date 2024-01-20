import React, { Suspense } from "react";
import { EnterCosmosStyle } from "./EnterCosmos.style";
import { Coin } from "@/components/Coin/Coin";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, Float, OrbitControls } from "@react-three/drei";
import Button from "@/components/Button/Button";

const EnterCosmos = () => {
  return (
    <EnterCosmosStyle>
      <div className='left'>
        <h2>
          Enter the <br /> cosmos.
        </h2>
        <p>
          Whether you’re a dev, token holder, or new to it all, there’s a place
          for everyone in Cosmos.
        </p>
        <Button onClick={() => {}}>Go to contacts</Button>
      </div>
      <div className='right'>
        <img src='/assets/images/cosmos_background.svg' alt='' />
        <Suspense fallback={null}>
          <Canvas>
            <Coin />
            <Environment preset='park' blur={30} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </Suspense>
      </div>
    </EnterCosmosStyle>
  );
};

export default EnterCosmos;
