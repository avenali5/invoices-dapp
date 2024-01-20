import styled from "styled-components";

export const InvoicesHeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    h3 {
      font-size: clamp(2rem, 2vw, 4rem);
    }
  }
  .right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 700px) {
    .right {
      .main-button {
        width: fit-content;
        font-size: 20px;
        span {
          display: none;
        }
      }
    }
  }
`;
