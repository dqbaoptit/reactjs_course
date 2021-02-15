import '../styles/globals.scss';
import Head from 'next/head';
import { Navigation, Sidebar } from '../containers';

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
      <Navigation />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            margin: '.5rem',
            border: '1px solid #19865c',
            borderRadius: '7px',
            padding: '1rem',
            overflowY: 'scroll',
            maxHeight: '89vh',
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
