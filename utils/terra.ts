import {
  LCDClient,
  MnemonicKey,
  MsgStoreCode,
  StdFee,
  MsgInstantiateContract,
  MsgExecuteContract,
  Coins,
  isTxError,
} from "@terra-money/terra.js";

export const network = {
  chainID: "bombay-10",
  lcd: "https://bombay-lcd.terra.dev",
  name: "bombay-10",
};

export const terra = new LCDClient({
  URL: network.lcd,
  chainID: network.chainID,
  gasAdjustment: 1.15,
});

const key = new MnemonicKey({
  mnemonic:
    "merge juice feel flee laptop track salad deliver bird replace pride nature oven creek neutral toward upgrade caution advance trend method aspect tooth region",
});

export const mainWallet = terra.wallet(key);

export const execute = async (
  wallet,
  addr,
  msgObj,
  coins?: Coins.Input,
  gasLimit = 5000000,
  amount = "1000000uusd"
) => {
  console.log("msg construct", msgObj);
  const tx = await wallet.createAndSignTx({
    msgs: [new MsgExecuteContract(wallet.key.accAddress, addr, msgObj, coins)],
    fee: new StdFee(gasLimit, amount),
  });
  console.log("before contract execution");
  const result = await terra.tx.broadcast(tx);
  console.log(result);
  if (isTxError(result)) {
    throw new Error(
      `store code failed. code: ${result.code}, codespace: ${result.codespace}, raw_log: ${result.raw_log}`
    );
  }
  console.log(result);
  if (
    result.raw_log ===
    "unauthorized: signature verification failed; verify correct account sequence and chain-id"
  ) {
    return execute(wallet, addr, msgObj, coins, gasLimit);
  }
  const txHash = result.txhash;
  console.log("Exec", addr, "at", txHash);
  return txHash;
};

export const query = async (addr, msg) => {
  const result = await terra.wasm.contractQuery(addr, msg);
  return result;
};
