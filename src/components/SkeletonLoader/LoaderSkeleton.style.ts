import styled from "styled-components";

export const LoaderSkeletonStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .element {
    background: #232323;
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    /* border: 1px solid var(--line_color); */
    opacity: 0.8;
    transition: 0.3s all;
    animation: staggerAnimation 1.5s ease-in-out infinite;

    .circle {
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      position: relative;
      /* background: var(--second_background_color); */
    }
    .lines {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      > div {
        background: #181818;

        &.line1 {
          width: 12rem;
          height: 5px;
        }
        &.line2 {
          width: 8rem;
          height: 5px;
        }
      }
    }
  }
  @keyframes staggerAnimation {
    0%,
    100% {
      opacity: 0.8;
    }

    50% {
      opacity: 0.4;
    }
  }
`;
