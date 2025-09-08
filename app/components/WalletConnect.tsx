import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function WalletConnect() {
  const { publicKey } = useWallet();

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <WalletMultiButton />
      {publicKey && <p>Connected: {publicKey.toBase58()}</p>}
    </div>
  );
}
