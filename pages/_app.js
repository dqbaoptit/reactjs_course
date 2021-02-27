import '../styles/globals.scss';
import Head from 'next/head';
import { Navigation } from '../containers';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PATIKEDU | ReactJS Course</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Truculenta:wght@200&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ position: 'absolute', width: '100vw' }}>
        <Navigation />
      </div>
      <div
        style={{
          overflowY: 'scroll',
          height: '100%',
          padding: '5rem 0rem',
        }}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
