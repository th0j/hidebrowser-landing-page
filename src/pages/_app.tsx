import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
