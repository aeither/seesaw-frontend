// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mainWallet, execute, terra } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import {
  toEncodedBinary,
  sendTransaction,
  storeCode,
  instantiateContract,
  queryNativeTokenBalance,
  queryTokenBalance,
} from "../../utils/helpers";
import { bankAddr, vammAddr } from "../../utils/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const poolUUsd = await queryNativeTokenBalance(terra, bankAddr, "uusd");
  console.log(poolUUsd);
  res.status(200).json(poolUUsd);
};
