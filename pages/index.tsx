import Head from "next/head";
import MainChart from "../components/MainChart";
import TradingPanel from "../components/TradingPanel";
import Navigation from "../components/Navigation";
import BottomPanel from "../components/BottomPanel";
import { Stack, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

// const Chart = dynamic(() => import("./chart"), {
//   ssr: false,
// });
export default function Home() {
  // @note contract testing addresses
  // 8921 bank https://finder.terra.money/bombay-10/address/terra1hjhakkuvg92svrxje3yf7c30y96fywy6ay7m86
  // 8923 vamm https://finder.terra.money/bombay-10/address/terra1cpem7rmvmtgr7tczjfk7nlx9nujexet6sf4zxm

  return (
    <div>
      <Head>
        <title>SeeSaw</title>
        <meta name="description" content="Perpetual on Terra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Stack direction="row" justify="center" spacing="2">
        <Stack direction="column">
          <MainChart />
          <BottomPanel />
        </Stack>
        {/* <Chart/> */}
        <TradingPanel />
      </Stack>

      {/* <Chart /> */}
    </div>
  );
}
