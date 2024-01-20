import React from "react";
import { FeaturesStyle } from "./Features.style";
import Image from "next/image";

const Features = () => {
  return (
    <FeaturesStyle>
      <div className='left'>
        <h2>A universe of connected services.</h2>
        <img src='/assets/images/features_background_planets.svg' alt='' />
      </div>
      <div className='right'>
        <div className='card one'>
          <div className='media'>
            <Image
              src='/assets/images/slide_1_mobile.svg'
              alt=''
              width={300}
              height={300}
            />
          </div>
          <span>One secure wallet for all your assets.</span>
        </div>
        <div className='card two'>
          <div className='media'>
            <Image
              src='/assets/images/slide_2_mobile.svg'
              alt=''
              width={300}
              height={300}
            />
          </div>
          <span>Swap tokens & collectibles.</span>
        </div>
        <div className='card three'>
          <div className='carousel'></div>
          <span>Provide liquidity. Earn rewards.</span>
        </div>
        <div className='card four'>
          <div className='carousel'></div>
          <span>
            + Ethereum <br /> + Bitcoin
          </span>
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;
