import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

// Response data
// snapshots: [
//     {
//       base_asset_reserve: '1000000000',
//       quote_asset_reserve: '1000000000000',
//       base_delta: 0,
//       timestamp: 1630604099538657300
//     },
//     {
//       base_asset_reserve: '999999998035',
//       quote_asset_reserve: '1000000000',
//       base_delta: -1,
//       timestamp: 1630666958973171200
//     }
//   ]

function useSnapshots() {
  //Get Native Token Balance
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/getSnapshots`, fetcher);
  return {
    snapshots: data,
    snapshotsLoading: !error && !data,
    snapshotsError: error,
  };
}

export default useSnapshots;
