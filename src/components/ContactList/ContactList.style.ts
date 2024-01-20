import styled from "styled-components";

export const ContactListStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 3rem;

  .no-results {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    background: #18181830;
    padding: 2rem 1rem;
    border-radius: 12px;
  }
`;
