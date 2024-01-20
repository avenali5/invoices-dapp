import styled from "styled-components";

export const CoinsDropdownStyle = styled.div`
  .options {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #202020;
    width: 60%;
    max-width: 20rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    box-shadow: 0px 0px 0px 100vh rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    transition: all 0.3s;
    &.visible {
      opacity: 1;
      pointer-events: all;
    }
    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
    .option {
      padding: 0.5rem;
      border-radius: 5px;
      &:hover {
        background: #181818;
      }
    }
  }
  .option {
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.2rem;
    border-radius: 5px;
  }
`;
