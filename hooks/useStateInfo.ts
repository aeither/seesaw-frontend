import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";
import useSWR from "swr";

function useStateInfo() {
  //Get Native Token Balance
  const fetcher = (url) => axios.get(url);
  const { data, error } = useSWR(`/api/getStateInfo`, fetcher, {
    refreshInterval: 20000,
  });
  return {
    stateInfo: data,
    isStateInfoLoading: !error && !data,
    isStateInfoError: error,
  };
}

export default useStateInfo;
