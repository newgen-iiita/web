import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a theme with Poppins font
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, Helvetica, sans-serif',
  },
  palette: {
    background: {
      default: '#000000', // Sets the global background color to black
    },
    text: {
      primary: '#ffffff', // Ensures text is readable on a black background
    },
  },
});
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
