import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import {
  wrapper,
  setDefaultToken,
  fetchListAddressConfig,
  saveUserInfo,
} from '@monorepo/function-shares';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Storage } from '@capacitor/storage';

function App({ Component, pageProps }: AppProps) {
  const AnyComponent = Component;
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkToken() {
      const token = await Storage.get({
        key: 'token',
      });
      const profile = await Storage.get({ key: 'profile' });
      if (token.value && profile.value) {
        setDefaultToken(token.value);
        dispatch(
          saveUserInfo({
            token: token.value,
            profile: JSON.parse(profile.value),
          })
        );
      }
      fetchListAddressConfig();
    }
    checkToken();
  }, [dispatch]);

  return (
    <>
      <Head>
      <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/mio.png"></link>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#4285f4"/>
        <link
          href="/mio.png"
          sizes="2048x2732"
          rel="apple-touch-startup-image"
        />
        <link
          href="/mio.png"
          sizes="1668x2224"
          rel="apple-touch-startup-image"
        />
        <link
          href="/mio.png"
          sizes="1536x2048"
          rel="apple-touch-startup-image"
        />
        <link
          href="/mio.png"
          sizes="1125x2436"
          rel="apple-touch-startup-image"
        />
        <link
          href="/apple_splash_1242.png"
          sizes="1242x2208"
          rel="apple-touch-startup-image"
        />
        <link
          href="/mio.png"
          sizes="750x1334"
          rel="apple-touch-startup-image"
        />
        <link
          href="/mio.png"
          sizes="640x1136"
          rel="apple-touch-startup-image"
        />
      </Head>
      <main className="app">
        <AnyComponent {...pageProps} />
        <ToastContainer
          hideProgressBar
          theme="colored"
          position="top-center"
          autoClose={3000}
          closeOnClick
        />
      </main>
    </>
  );
}

export default wrapper.withRedux(App);
