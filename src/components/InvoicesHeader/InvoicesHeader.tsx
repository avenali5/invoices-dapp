import React, { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { InvoicesHeaderStyle } from "./InvoicesHeader.style";

type Props = {
  setAddInvoice: Dispatch<SetStateAction<boolean>>;
};

const InvoicesHeader = ({ setAddInvoice }: Props) => {
  return (
    <InvoicesHeaderStyle>
      <div className='left'>
        <h3>Invoices</h3>
      </div>
      <div className='right'>
        <div className='filter-button'></div>
        <Button onClick={() => setAddInvoice(true)}>
          <Icon icon='ph:newspaper' />
          <span>Add invoice</span>
        </Button>
      </div>
    </InvoicesHeaderStyle>
  );
};

export default InvoicesHeader;
