"use client";
import AddInvoice from "@/components/AddInvoice/AddInvoice";
import Header from "@/components/Header/Header";
import Invoices from "@/components/Invoices/Invoices";
import React, { useState } from "react";
import styled from "styled-components";

const PageStyle = styled.main`
  padding: 1.3rem;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: url("/assets/images/invoices_background.svg") no-repeat bottom
    center/cover;
  h1 {
    pointer-events: none;
    font-size: clamp(4.5rem, 6vw, 8rem);
    line-height: 1;
    background: linear-gradient(
      180deg,
      #fff 12.03%,
      rgba(255, 255, 255, 0.71) 129.72%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    .gradient {
      background: linear-gradient(
        180deg,
        #fff 12.03%,
        rgba(255, 255, 255, 0.71) 129.72%
      );
      background: linear-gradient(
        96deg,
        rgba(66, 81, 207, 0.5) 44.79%,
        rgba(146, 50, 107, 0.5) 94.39%
      );

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

const page = () => {
  const [addInvoice, setAddInvoice] = useState(false);

  return (
    <PageStyle>
      <Header />
      {/* <h1>
        Build on <br /> the <span className='gradient'>chain.</span>
      </h1> */}
      <div style={{ flex: 1 }}></div>
      <Invoices setAddInvoice={setAddInvoice} />
      {addInvoice && <AddInvoice onClose={() => setAddInvoice(false)} />}
    </PageStyle>
  );
};

export default page;
