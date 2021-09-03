import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

// interface PositionProps {
//     margin: string;
//     margin_left: string;
//     openingValue: string;
//     current_value: string;
//     margin_ratio: string;
//     positionSize: string;
//     direction: string;
//     pnl: number;
//   }

function useActivePositionInfo() {
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/getActivePositionInfo`, fetcher, {
    refreshInterval: 10000,
  });
  return {
    positionInfo: data,
    positionInfoLoading: !error && !data,
    positionInfoError: error,
  };
}

export default useActivePositionInfo;
