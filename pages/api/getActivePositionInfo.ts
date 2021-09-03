// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import { bankAddr, vammAddr, walletAddr } from "../../utils/constants";

// position_res {
//     margin: '0',
//     margin_left: '980',
//     openingValue: '20',
//     current_value: '1000',
//     margin_ratio: '49',
//     positionSize: '1',
//     direction: 'l_o_n_g',
//     pnl: 980
//   }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const position_res = await query(bankAddr, {
    position: {
      market_addr: vammAddr,
      user_addr: walletAddr,
    },
  });
  // console.log("position_res", position_res);
  res.status(200).json(position_res);
};
