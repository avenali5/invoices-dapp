import styled from "styled-components";

export const ContactCardStyle = styled.div`
  background: #181818;
  padding: 0.6rem;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  grid-template-rows: 1fr 1fr;
  font-size: 0.9rem;
  position: relative;

  .name {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    font-size: 1rem;
    &.large {
      display: none;
    }
  }
  .wallet {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin-left: auto;
    width: fit-content;
    display: flex;
    opacity: 0.5;
    margin-right: 1.8rem;
  }
  .options-button {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    margin-left: auto;
    font-size: 18px;
  }
  .date {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
    margin: 0.5rem 0;
    opacity: 0.8;
  }
  .price {
    grid-column: 1 / 3;
    grid-row: 3/ 4;
    display: flex;
    align-self: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    .iconify {
      font-size: 20px;
    }
    .detail {
      font-size: 0.8rem;
      align-self: end;
      opacity: 0.8;
    }
  }
  .status {
    grid-column: 3 / 4;
    grid-row: 2 / 4;
    margin-left: auto;
    align-self: end;
    align-content: end;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .circle {
      height: 5px;
      width: 5px;
      border-radius: 200px;
    }
    &.pending {
      background: #f9c02e26;
      color: #f9c02e;
    }
    &.overdue {
      background: #f92e2e26;
      color: #f92e2e;
    }
  }

  @media (min-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0.6rem;
    gap: 1rem;
    * {
      margin: 0 !important;
    }
    .date {
      flex: 1;
    }
    .name {
      flex: 2;
      &.mobile {
        display: none;
      }
      &.large {
        display: block;
      }
    }
    .price {
      flex: 2;
    }
  }
`;
