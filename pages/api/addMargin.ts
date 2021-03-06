// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mainWallet, execute, terra } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import { bankAddr, vammAddr } from "../../utils/constants";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { amount } = req.query;
  const hash = await execute(
    mainWallet,
    bankAddr,
    {
      deposit_stable: {
        market_addr: vammAddr,
      },
    },
    `${amount}uusd`
  );
  res.status(200).json(hash);
};
