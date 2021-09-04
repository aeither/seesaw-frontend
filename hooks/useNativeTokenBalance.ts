import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

function useNativeTokenBalance() {
  //Get Native Token Balance
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/getNativeTokenBalance`, fetcher, {
    refreshInterval: 50000,
  });
  return {
    tokenBalance: data,
    isTokenBalanceLoading: !error && !data,
    isTokenBalanceError: error,
  };
}

export default useNativeTokenBalance;
