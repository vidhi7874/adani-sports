import { mode } from "@chakra-ui/theme-tools";
/* styles/globals.css */
import "./fonts.css";
/* Add other global styles here */

/* styles/fonts.css */

export const globalStyles = {
  colors: {
    primary: {
      100: "#007EA8",
    },

    secondary: {
      100: "#7E7E7E",
    },
    third: {
      100: "#006DB7",
    },

    darkgray: { 100: "#383838" },
    gray: {
      900: "#45464E",
      800: "#636363",
      700: "#1f2733",
      600: "#ADB8CC",
      500: "#344054",
      400: "#667085",
      300: "#9F9F9F", //Placeholder color
      200: "#F8F8F8", // Input box color
      100: "#f3f3f3",
      50: "#f4f5fa",
      10: "#c3c3c3",
    },
    white: {
      100: "#FFFFFF",
    },
    black: {
      100: "#212529",
    },
    skyblue: {
      100: "#E0F2FD",
    },
    blue: {
      100: "#006DB7",
      200: "#0C82EE",
    },

    border_light: {
      100: "#E2E8F0",
    },
    CheckBoxPrimary: {
      500: "#0C82EC",
    },
    radioBoxPrimary: {
      500: "#A6CE39", // Replace with your custom color value
    },
    switchColor: {
      500: "#A6CE39", // Color for the switch component
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            color: "CheckBoxPrimary.500", // Apply the custom color to the checked state
          },
        },
      },
    },
  },

  //These is for the Radio button

  Radio: {
    baseStyle: {
      control: {
        _checked: {
          color: "radioBoxPrimary.500", // Apply the custom color to the checked state
        },
      },
    },
  },

  //These is for the Switch button
  Switch: {
    baseStyle: {
      control: {
        _checked: {
          color: "switchColor.500", // Apply the custom color to the checked state
        },
      },
    },
  },
  fonts: {
    body: "'Adani Medium', sans-serif",
    heading: "'Adani Medium', sans-serif",
    p: "'Adani Medium', sans-serif",
    mono: "'Adani Medium', monospace",
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 900,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("white")(props),
        fontFamily: "'Adani Medium', sans-serif",
      },
      html: {
        fontFamily: "'Adani Medium', sans-serif",
      },
      h1: {
        fontFamily: "html",
        fontWeight: "medium",
      },
      h2: {
        fontFamily: "html",
        fontWeight: "medium",
      },
      p: {
        fontFamily: "body",
        fontWeight: "medium",
      },
    }),
  },
  components: {
    Input: {
      baseStyle: {
        fontWeight: "medium", // Set the default fontWeight for Input component globally
      },
    },
  },
};
