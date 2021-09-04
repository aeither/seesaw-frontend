import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

function useAccountBalance() {
  //Get Native Token Balance
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/getAccountBalance`, fetcher, {
    refreshInterval: 30000,
  });
  return {
    ustBalance: data,
    ustBalanceLoading: !error && !data,
    ustBalanceError: error,
  };
}

export default useAccountBalance;
