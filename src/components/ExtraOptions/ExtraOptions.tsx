import React, { Dispatch, SetStateAction } from "react";
import { ExtraOptionsStyle } from "./ExtraOptions.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import useClickOutside from "@/utils/useClickOutside";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ADRESS } from "@/utils/address";

type Props = {
  setExtraOptions: Dispatch<SetStateAction<boolean>>;
  index: string;
};

const ExtraOptions = ({ setExtraOptions, index }: Props) => {
  const ref: any = useClickOutside(() => setExtraOptions(false));
  const { contract } = useContract(CONTRACT_ADRESS);
  const { mutateAsync: removeContact } = useContractWrite(
    contract,
    "removeContact"
  );

  const markAsPaid = async () => {
    try {
      const data = await removeContact({ args: [index] });
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  const deleteInvoice = async () => {
    try {
      const data = await removeContact({ args: [index] });
    } catch (err) {
      console.error("contract call failure", err);
    }
  };

  return (
    <ExtraOptionsStyle ref={ref}>
      <ul>
        <li className='pointer no-select' onClick={markAsPaid}>
          <Icon icon='ph:check' />
          Mark as paid
        </li>
        <li className='pointer no-select' onClick={deleteInvoice}>
          <Icon icon='ph:trash' />
          Delete invoice
        </li>
      </ul>
    </ExtraOptionsStyle>
  );
};

export default ExtraOptions;
