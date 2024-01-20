import { ConnectWallet } from "@thirdweb-dev/react";
import React from "react";
import { HeaderStyle } from "./Header.style";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderStyle>
      <div className='wrapper max-width'>
        <div className='logo'>
          <Image
            src='/assets/images/logo.svg'
            alt='Cosmos'
            width={400}
            height={400}
            className='large'
          />
          <Image
            src='/assets/images/favicon.svg'
            alt='Cosmos'
            width={400}
            height={400}
            className='mobile'
          />
        </div>
        <ConnectWallet />
      </div>
    </HeaderStyle>
  );
};

export default Header;
