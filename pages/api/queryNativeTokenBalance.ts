// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mainWallet, init, upload, execute, terra } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import {
  toEncodedBinary,
  sendTransaction,
  storeCode,
  instantiateContract,
  queryNativeTokenBalance,
  queryTokenBalance,
} from "../../utils/helpers";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  let bankAddr: string = "terra1hjhakkuvg92svrxje3yf7c30y96fywy6ay7m86";
  let vammAddr: string = "terra1cpem7rmvmtgr7tczjfk7nlx9nujexet6sf4zxm";
  const poolUUsd = await queryNativeTokenBalance(terra, bankAddr, "uusd");
  console.log(poolUUsd);
  res.status(200).json(poolUUsd);
};
