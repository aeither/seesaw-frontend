import React from "react";

declare const TradingView: any;

export type AdvancedChartWidgetProps = {
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  symbol?: string;
  interval?: string;
  range?: string;
  timezone?: string;
  theme?: string;
  style?: string;
  locale?: string;
  toolbar_bg?: string;
  hide_top_toolbar?: boolean;
  hide_side_toolbar?: boolean;
  hide_legend?: boolean;
  withdateranges?: boolean;
  save_image?: boolean;
  enable_publishing?: boolean;
  allow_symbol_change?: boolean;
  container_id?: string;
  studies?: Array<string>;
};

type AdvancedChartProps = {
  widgetProps?: AdvancedChartWidgetProps;
  widgetPropsAny?: any;
  children?: never;
};

const AdvancedChart = (props: AdvancedChartProps) => {
  const { widgetProps, widgetPropsAny } = props;

  let containerId = "advanced-chart-widget-container";
  if (widgetProps?.container_id) {
    containerId = widgetProps?.container_id;
  }

  const ref: { current: HTMLDivElement | null } = React.createRef();

  React.useEffect(() => {
    let refValue: any;

    if (ref.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        if (typeof TradingView !== "undefined") {
          new TradingView.widget({
            width: 980,
            height: 610,
            symbol: "NASDAQ:AAPL",
            interval: "240",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: containerId,
            ...widgetProps,
            ...widgetPropsAny,
          });
        }
      };
      ref.current.appendChild(script);
      refValue = ref.current;
    }

    return () => {
      if (refValue) {
        while (refValue.firstChild) {
          refValue.removeChild(refValue.firstChild);
        }
      }
    };
  }, [ref, widgetProps, widgetPropsAny, containerId]);

  return <div id={containerId} ref={ref} />;
};

export default AdvancedChart;
