// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { query } from "../../utils/terra";
import { NextApiRequest, NextApiResponse } from "next";
import { vammAddr } from "../../utils/constants";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const state_res = await query(vammAddr, {
        market_snapshots: {},
      });
      console.log('getSnapshots: ', state_res);
  res.status(200).json(state_res);
};
