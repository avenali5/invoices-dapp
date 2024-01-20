import styled from "styled-components";

export const HeaderStyle = styled.header`
  position: relative;
  z-index: 10;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      .large {
        display: none;
      }
      .mobile {
        width: 3rem;
        height: auto;
      }
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      .logo {
        .mobile {
          display: none;
        }
        .large {
          display: block;
          width: 8rem;
          height: auto;
        }
      }
    }
  }
`;
