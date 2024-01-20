import styled from "styled-components";

export const FeaturesStyle = styled.section`
  min-height: 60vh;
  background: black;
  z-index: 10;
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  .left {
    position: relative;
    padding: 1rem;
    img {
      position: absolute;
      width: 200%;
      left: -20rem;
      top: 0;
      z-index: 0;
    }
    h2 {
      font-size: clamp(3rem, 4vw, 6rem);
      position: relative;
      z-index: 1;
      line-height: 1;
    }
  }
  .right {
    position: relative;
    z-index: 1;
    margin-top: 4rem;
    display: flex;
    align-items: center;
    width: auto;
    overflow-x: scroll;
    padding: 2rem 1rem;
    gap: 2rem;
    &::-webkit-scrollbar {
      height: 0;
      width: 0;
    }
    .card {
      background: #181818;
      min-width: 20rem;
      border-radius: 12px;
      padding: 1.5rem;
      height: 20rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .media {
        flex: 1;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      span {
        font-size: clamp(1.8rem, 2vw, 2rem);
      }
    }
  }
`;
