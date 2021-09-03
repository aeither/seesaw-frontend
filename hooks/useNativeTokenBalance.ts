import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

function useNativeTokenBalance() {
  //Get Native Token Balance
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/queryNativeTokenBalance`, fetcher, {
    refreshInterval: 5000,
  });
  return {
    tokenBalance: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useNativeTokenBalance;
