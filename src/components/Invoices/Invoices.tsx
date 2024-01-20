import React, { Dispatch, SetStateAction, useState } from "react";
import ContactList from "../ContactList/ContactList";
import InvoicesHeader from "../InvoicesHeader/InvoicesHeader";
import { InvoicesStyle } from "./Invoices.style";

type Props = {
  setAddInvoice: Dispatch<SetStateAction<boolean>>;
};

const Invoices = ({ setAddInvoice }: Props) => {
  return (
    <InvoicesStyle>
      <InvoicesHeader setAddInvoice={setAddInvoice} />
      <ContactList />
    </InvoicesStyle>
  );
};

export default Invoices;
