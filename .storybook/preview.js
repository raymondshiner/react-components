import { muiTheme } from "storybook-addon-material-ui";
import { darkTheme, lightTheme } from "./themes";

export const decorators = [muiTheme([lightTheme, darkTheme])];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
