// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mainWallet, execute, query } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import { bankAddr, vammAddr, walletAddr } from "../../utils/constants";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { amount } = req.query;
  const open_res = await execute(mainWallet, bankAddr, {
    open_position: {
      market_addr: vammAddr,
      open_value: {amount},
      direction: "l_o_n_g",
    },
  });
  console.log(open_res);

  const position_res = await query(bankAddr, {
    position: {
      market_addr: vammAddr,
      user_addr: walletAddr,
    },
  });
  console.log("position_res", position_res);

  res.status(200).json("ok");
};
