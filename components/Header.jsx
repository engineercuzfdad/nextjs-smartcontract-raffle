import { ConnectButton } from "@web3uikit/web3";

function Header() {
  return (
    <div>
      Decentralized Raffle
      <ConnectButton moralisAuth={false} />
    </div>
  );
}

export default Header;
