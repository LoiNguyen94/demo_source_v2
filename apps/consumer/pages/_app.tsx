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
        <title>Welcome to consumer!</title>
        <link rel="icon" href="/icon.ico" type="image/x-icon"></link>
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
