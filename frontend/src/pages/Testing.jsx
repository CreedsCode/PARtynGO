import React from "react";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupNearWallet } from "@near-wallet-selector/near-wallet";

export default async function Testing() {
  const selector = await setupWalletSelector({
    network: "testnet",
    modules: [setupNearWallet()],
  });

  const modal = setupModal(selector, {
    contractId: "test.testnet",
  });

  modal.show();
  return (
    <div>
      Testing <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
