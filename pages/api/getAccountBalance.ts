// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mainWallet, execute, terra } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import { walletAddr } from "../../utils/constants";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const info = await terra.auth.accountInfo(walletAddr);

  const accountInfo = {
    address: info.address,
    coins: {
      uusd: info.coins.get("uusd").amount,
    },
  };

  res.status(200).json(accountInfo);
};
