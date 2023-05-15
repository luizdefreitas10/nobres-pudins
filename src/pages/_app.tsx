import GlobalStyles from '@/styles/GlobalStyles';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '@/styles/theme';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
