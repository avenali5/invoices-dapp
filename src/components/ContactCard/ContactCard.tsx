import { CONTRACT_ADRESS } from "@/utils/address";
import { Web3Button, useContractWrite } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { ContactCardStyle } from "./ContactCard.style";
import { Icon } from "@iconify/react/dist/iconify.js";
import ExtraOptions from "../ExtraOptions/ExtraOptions";

type Props = {
  contact: {
    name: string;
    wallet: string;
    price: string;
    date: string;
    coin: string;
  };
  index: string;
  removeContact: (val: any) => void;
};

const ContactCard = ({ index, contact, removeContact }: Props) => {
  const [copied, setCopied] = useState(false);
  const [extraOptions, setExtraOptions] = useState(false);

  const copyWallet = (wallet: string) => {
    navigator.clipboard
      .writeText(wallet)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch(() => {
        alert("Could not copy wallet");
      });
  };

  const date = new Date(contact.date);
  const day = ("0" + date.getDate()).slice(-2);
  const monthAbbreviation = date.toLocaleString("en-us", {
    month: "short",
  });
  const year = date.getFullYear();
  const formattedDate = `${day} ${monthAbbreviation} ${year}`;

  return (
    <ContactCardStyle className='no-select'>
      <div className='wallet'>
        <span>{contact.wallet.slice(0, 5)}...</span>
        {copied ? (
          <Icon icon='ph-check' />
        ) : (
          <Icon
            icon='ph-copy'
            className='pointer'
            onClick={() => copyWallet(contact.wallet)}
          />
        )}
      </div>
      <span className='date'>Due {formattedDate}</span>
      <span className='name mobile'>
        {contact.name.length > 16
          ? `${contact.name.slice(0, 16)}...`
          : contact.name}
      </span>
      <span className='name large'>
        {contact.name.length > 25
          ? `${contact.name.slice(0, 25)}...`
          : contact.name}
      </span>
      <div className='price'>
        <Icon icon={`cryptocurrency-color:${contact.coin.toLowerCase()}`} />
        <p>{contact.price}</p>
        <div className='detail'>{contact.coin}</div>
      </div>
      <div className={`${new Date() < date ? "pending" : "overdue"} status`}>
        <div
          className='circle'
          style={{
            background: new Date() < date ? "#F9C02E" : "#F92E2E",
          }}
        />
        {new Date() < date ? "Pending" : "Overdue"}
      </div>
      <Icon
        icon='ph:dots-three-vertical-bold'
        className='options-button pointer'
        onClick={() => setExtraOptions(!extraOptions)}
      />

      {extraOptions && (
        <ExtraOptions
          setExtraOptions={setExtraOptions}
          index={index}
          // handleRemove={handleRemove}
        />
      )}

      {/* <button onClick={() => handleRemove(index)}>remove</button> */}
      {/* <Web3Button
        contractAddress={CONTRACT_ADRESS}
        action={(contract: any) => {
          contract.call("removeContact", [index]);
        }}
      >
        remove
      </Web3Button> */}
    </ContactCardStyle>
  );
};

export default ContactCard;
