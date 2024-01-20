import React, { useEffect } from "react";
import { LoaderSkeletonStyle } from "./LoaderSkeleton.style";

type ILoaderProps = {
  amount?: number;
};

const LoaderSkeleton = ({ amount = 4 }: ILoaderProps) => {
  const elements: number[] = [];

  for (let i = 0; i < amount; i++) {
    elements.push(i * 0.2);
  }

  return (
    <LoaderSkeletonStyle>
      {elements?.map(el => (
        <div className='element' key={el} style={{ animationDelay: `${el}s` }}>
          {/* <div className='circle' /> */}
          <div className='lines'>
            <div className='line1'></div>
            <div className='line2'></div>
          </div>
        </div>
      ))}
    </LoaderSkeletonStyle>
  );
};

export default LoaderSkeleton;
