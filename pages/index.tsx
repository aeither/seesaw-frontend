import Head from "next/head";
import MainChart from "../components/MainChart";
import TradingPanel from "../components/TradingPanel";
import Navigation from "../components/Navigation";
import BottomPanel from "../components/BottomPanel";
import { Stack, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./chart"), {
  ssr: false,
});
export default function Home() {

  return (
    <div>
      <Head>
        <title>SeeSaw</title>
        <meta name="description" content="Seesaw" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Stack direction="row" justify="center" spacing="2">
        <Stack direction="column">
          {/* <MainChart /> */}
        <Chart/>
          <BottomPanel />
        </Stack>
        <TradingPanel />
      </Stack>

      {/* <Chart /> */}
    </div>
  );
}
