import { CONTRACT_ADRESS } from "@/utils/address";
import { Web3Button } from "@thirdweb-dev/react";
import React, { useState } from "react";
import { AddInvoiceStyle } from "./AddInvoice.style";
import CoinsDropdown from "../CoinsDropdown/CoinsDropdown";
import { BigNumber, ethers } from "ethers";

type Props = {
  onClose: () => void;
};

const AddInvoice = ({ onClose }: Props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState("");
  const [coin, setCoin] = useState("BTC");
  const [index, setIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [data, setData] = useState({
    name: "",
    address: "",
    price: 0,
    date: "",
    coin: "",
  });

  const handleError = (err: any) => {
    console.log("error pero");
    console.log(err);
  };
  const resetForm = () => {
    setName("");
    setAddress("");
  };

  return (
    <AddInvoiceStyle>
      <div className='card'>
        <button onClick={onClose} className='close pointer'>
          Close
        </button>
        <div className='form'>
          <h3>Add invoice</h3>
          <div className='input-group'>
            <label htmlFor='name'>Name</label>
            <input
              id='name'
              type='text'
              placeholder='John Doe'
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              pattern="^[A-Za-z\s'-]{1,}$"
            />
          </div>
          <div className='input-group'>
            <label htmlFor=''>Wallet address</label>
            <input
              id=''
              type='text'
              placeholder='0x000'
              value={address}
              onChange={(e: any) => setAddress(e.target.value)}
              pattern='^0x[0-9A-Fa-f]{40}$'
            />
          </div>
          <input id='' type='hidden' placeholder='0x000' value={2} />
          <div className='input-group'>
            <label htmlFor=''>Value</label>
            <div className='inputs'>
              <div>
                <input
                  type='text'
                  placeholder='0.00 BTC'
                  value={price}
                  onChange={(e: any) => setPrice(e.target.value)}
                />
              </div>
              <div className='coins'>
                <CoinsDropdown
                  coin={coin}
                  setCoin={setCoin}
                  dropdown={dropdown}
                  setDropdown={setDropdown}
                />
              </div>
            </div>
          </div>
          <div className='input-group'>
            <label htmlFor=''>Due date</label>
            <input
              type='date'
              placeholder='0.00 BTC'
              value={date}
              onChange={(e: any) => setDate(e.target.value)}
            />
          </div>

          <Web3Button
            contractAddress={CONTRACT_ADRESS}
            action={contract =>
              contract.call("addContact", [
                name,
                address,
                index,
                price,
                date,
                coin,
              ])
            }
            onSuccess={() => {
              resetForm();
              onClose();
            }}
            onError={handleError}
          >
            Add invoice
          </Web3Button>
        </div>
      </div>
    </AddInvoiceStyle>
  );
};

export default AddInvoice;
