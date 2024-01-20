import styled from "styled-components";

export const AddInvoiceStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 1000;

  .card {
    background: #202020;
    border-radius: 12px;
    padding: 1rem;
    width: 80%;
    max-width: 33rem;
    display: flex;
    flex-direction: column;
    position: relative;
    .close {
      width: fit-content;
      background: none;
      border: none;
      color: white;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    .form {
      display: grid;
      gap: 1rem;

      .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        label {
          &:has(:focus-invalid) {
            color: tomato;
          }
        }

        .inputs {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1 1;
          .coins {
            width: 100%;
            .select {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
        }
        input,
        .input {
          background: #262626;
          border: none;
          padding: 0.8rem;
          color: white;
          border-radius: 10px;
          outline: none;
        }
        input {
          border: 1px solid transparent;
        }
        input:valid {
          border-color: green;
        }
        input:invalid {
          border-color: tomato;
        }
      }
    }
    /* position: absolute; */
    /* left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); */
  }
`;
