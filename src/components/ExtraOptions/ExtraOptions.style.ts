import styled from "styled-components";

export const ExtraOptionsStyle = styled.div`
  position: absolute;
  right: 2rem;
  top: 2rem;
  background: #202020;
  border-radius: 10px;
  overflow: hidden;
  z-index: 5;
  ul {
    list-style-type: none;
    li {
      padding: 0.7rem;
      display: flex;
      align-items: center;
      gap: 0.7rem;
      transition: all 0.3s;

      &:hover {
        background: #2a2a2a;
      }
    }
  }
`;
