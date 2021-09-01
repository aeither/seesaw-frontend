import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  brand: {
    900: "#5C74FF",
    800: "#5C74FF",
    600: "#5C74FF",
    500: "#5C74FF",
    400: "#5C74FF",
    300: "#5C74FF",
    200: "#5C74FF",
    100: "#5C74FF",
    50: "#5C74FF",
  },
};

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("#111629", "whiteAlpha.900")(props),
      bg: mode("white", "#111629")(props),
      lineHeight: "base",
    },
  }),
};

const primaryLight = "#5C74FF";
const components = {
  Button: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
  CloseButton: {
    baseStyle: {
      _focus: {
        boxShadow: "none",
      },
    },
  },
  Tabs: {
    baseStyle: {
      tab: {
        _focus: {
          zIndex: 1,
          boxShadow: "none",
        },
      },
    },
    variants: {
      line: (props) => ({
        tab: {
          _selected: {
            color: props.colorMode === "dark" ? primaryLight : "red.500",
          },
        },
      }),
    },
  },
  Input: {
    variants: {
      outline: (props) => ({
        field: {
          _focus: {
            zIndex: 1,
            borderColor: props.colorMode === "dark" ? primaryLight : "red.500",
            boxShadow: `0 0 0 1px ${
              props.colorMode === "dark" ? primaryLight : "red.500"
            }`,
          },
        },
      }),
    },
  },
  Slider: {
    baseStyle: {
      thumb: {
        _focus: { boxShadow: "none" },
      },
    },
  },
};

export const theme = extendTheme({ colors, styles, components });
