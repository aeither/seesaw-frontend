import { AdvancedChart } from "./tradingview";

export default function MainChart() {
  return (
    <AdvancedChart
      widgetProps={{
        width: 980,
        height: 610,
        symbol: "BINANCE:BTCPERP",
        interval: "240",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_20bd8",
      }}
    />
  );
}
