import styled from "styled-components";

export const HeroStyle = styled.section`
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  /* background: url("assets/images/planets_background.jpg") no-repeat top
    center/400%; */
  img {
    position: fixed;
    width: 80rem;
    height: auto;
    z-index: -1;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  /* background: url("assets/images/planets_background.jpg") no-repeat top
    center/170%; */
  .model {
    top: 0;
    left: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 1;
    /* pointer-events: none; */
    canvas {
    }
  }
  .text {
    width: 100%;
    max-width: 30rem;
    position: absolute;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: 1;

    h1 {
      pointer-events: none;
      font-size: clamp(4.5rem, 6vw, 8rem);
      line-height: 1;
      background: linear-gradient(
        180deg,
        #fff 12.03%,
        rgba(255, 255, 255, 0.71) 129.72%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      .gradient {
        background: linear-gradient(
          180deg,
          #fff 12.03%,
          rgba(255, 255, 255, 0.71) 129.72%
        );
        background: linear-gradient(
          96deg,
          rgba(66, 81, 207, 0.5) 44.79%,
          rgba(146, 50, 107, 0.5) 94.39%
        );

        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    p {
      max-width: 18rem;
      margin: 0 auto;
      pointer-events: none;
    }
    a {
      display: block;
      margin-top: 3rem;
      button {
        font-size: 1.4rem;
      }
    }
  }
  .fade-rectangle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20rem;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
    z-index: 130;
    pointer-events: none;
  }
`;
