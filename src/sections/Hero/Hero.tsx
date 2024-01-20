import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@/components/Stars/Stars";

import {
  Bounds,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { HeroStyle } from "./Hero.style";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <HeroStyle className='hero-section'>
      <div className='model'>
        <Suspense fallback={null}>
          <Canvas>
            {/* <Bounds fit clip observe margin={1.2}> */}
            {/* <Float scale={1.5} position={[0, 0, 0]} rotation={[0, 0.6, 0]}> */}
            <Stars />
            {/* </Float> */}
            {/* </Bounds> */}

            <Environment preset='park' blur={30} />
            {/* <OrbitControls /> */}
            {/* <PerspectiveCamera
            position={[0, 0, 2.5]}
            fov={100}
            type='perspective'
          /> */}
          </Canvas>
        </Suspense>
      </div>
      <div className='text'>
        <h1>
          Build on <br /> the <span className='gradient'>chain.</span>
        </h1>
        <p>Keep your invoices descentralized and safely stored.</p>
        <Link href='/invoices'>
          <Button onClick={() => {}}>Go to invoices</Button>
        </Link>
      </div>
      <Image
        src='/assets/images/planets_background.jpg'
        alt=''
        width={1000}
        height={1000}
      />
      <div className='fade-rectangle' />
    </HeroStyle>
  );
};

export default Hero;
