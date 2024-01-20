import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 14px 14px;
  border-radius: 8px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  &:active {
    transform: translateY(1px);
  }
`;
