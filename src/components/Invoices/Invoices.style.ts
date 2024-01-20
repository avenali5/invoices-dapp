import styled from "styled-components";

export const InvoicesStyle = styled.div`
  border-radius: 26px 26px 0 0;
  background: rgba(24, 24, 24, 0.41);
  backdrop-filter: blur(37.56666564941406px);
  overflow-y: scroll;
  padding: 1.3rem;
  flex: 1;
  max-width: 950px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background: black;
  }
`;
