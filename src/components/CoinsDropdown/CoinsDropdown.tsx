import useClickOutside from "@/utils/useClickOutside";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { CoinsDropdownStyle } from "./CoinsDropdown.style";

type Props = {
  coin: string;
  setDropdown: (val: boolean) => void;
  dropdown: boolean;
  setCoin: (val: string) => void;
};

const CoinsDropdown = ({ dropdown, setDropdown, coin, setCoin }: Props) => {
  const ref: any = useClickOutside(() => {
    setDropdown(false);
  });

  const coinsArr = [
    {
      coin: "USD",
    },
    {
      coin: "EUR",
    },
    {
      coin: "GBP",
    },
    {
      coin: "BTC",
    },
    {
      coin: "ETH",
    },
    {
      coin: "ADA",
    },
    {
      coin: "USDT",
    },
    {
      coin: "BNB",
    },
    {
      coin: "DOGE",
    },
    {
      coin: "USDC",
    },
    {
      coin: "DOT",
    },
    {
      coin: "XRP",
    },
    {
      coin: "SOL",
    },
    {
      coin: "BAT",
    },
    {
      coin: "MAID",
    },
  ];

  return (
    <CoinsDropdownStyle ref={ref}>
      <div className='select input pointer' onClick={() => setDropdown(true)}>
        {coin ? (
          <div className='option    '>
            <Icon icon={`cryptocurrency-color:${coin.toLowerCase()}`} />
            <span>{coin.toUpperCase()}</span>
          </div>
        ) : (
          <span>Coin</span>
        )}
        <Icon
          icon='mdi:chevron-down'
          style={{
            transform: !dropdown ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </div>
      <div className={` ${dropdown ? "visible" : "hidden"} options`}>
        {/* // .filter(el => el.value !== link.platform) */}
        {/* // .filter(opt => !links.some(link => link.platform === opt.value)) */}
        {coinsArr.map(coin => (
          <div
            key={coin.coin}
            className='option pointer'
            onClick={() => {
              setCoin(coin.coin);
              setDropdown(false);
            }}
          >
            <Icon icon={`cryptocurrency-color:${coin.coin.toLowerCase()}`} />
            <span>{coin.coin}</span>
          </div>
        ))}
      </div>
    </CoinsDropdownStyle>
  );
};

export default CoinsDropdown;
