import styled from "styled-components";

export const EnterCosmosStyle = styled.section`
  padding: 4rem 1rem;
  background: black;
  position: relative;
  z-index: 10;
  min-height: 60vh;
  overflow: hidden;

  .left {
    h2 {
      font-size: clamp(3rem, 4vw, 6rem);
      line-height: 1;
    }
    p {
      margin: 1rem 0 2rem;
    }
  }
  .right {
    img {
      position: absolute;
      width: 150%;
      height: auto;
      left: 50%;
      transform: translateX(-50%);
    }
    canvas {
      height: 300px !important;
    }
  }
`;
