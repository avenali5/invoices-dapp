import { CONTRACT_ADRESS } from "@/utils/address";
import {
  useAddress,
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import { ContactListStyle } from "./ContactList.style";
import LoaderSkeleton from "../SkeletonLoader/LoaderSkeleton";

const ContactList = () => {
  const { contract } = useContract(CONTRACT_ADRESS);
  const address = useAddress();
  const { data: contacts, isLoading } = useContractRead(
    contract,
    "getContacts"
  );
  const { mutateAsync: removeContact } = useContractWrite(
    contract,
    "removeContact"
  );

  return (
    <ContactListStyle>
      {isLoading ? (
        <LoaderSkeleton amount={4} />
      ) : !isLoading && contacts?.length === 0 ? (
        <div className='no-results'>
          <h3>You have no invoices</h3>
          <p>
            {address
              ? "Add your first invoice"
              : "Connect your wallet and start adding invoices"}
          </p>
        </div>
      ) : (
        contacts?.map((contact: any, i: string) => (
          // @ts-ignore
          <ContactCard
            contact={contact}
            key={i}
            index={i}
            removeContact={removeContact}
          />
        ))
      )}
    </ContactListStyle>
  );
};

export default ContactList;
