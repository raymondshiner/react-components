import { createMuiTheme } from "@material-ui/core";

export const arcserveMuiTheme = createMuiTheme({
  pallete: {
    primary: {
      main: '#6200EE',
      dark: '#3700B3',
      light: '#BB86FC',
      background: '#6200EE',
      border: '#6200EE',
      contrastText: '#FFFFF',
    },
    secondary: {
      main: '#03DAC5',
      dark: '#018786',
      light: '#70EFDE',
      background: '#03DAC5',
      border: '#12DD99',
      contrastText: '#000000',
    },
    other: {
      stroke: 'rgba(0,0,0,23)',
      divider: "#E0E0E0",
      backdrop: 'rgba(0,0,0,50)',
      snackbar: "#323232",
      activeRating: "#FFD500",
    }
  }
});
