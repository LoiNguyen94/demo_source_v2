import { Capacitor } from '@capacitor/core';
import { NextRouter, useRouter } from 'next/router';
import { env } from 'process';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';

export const isWeb = Capacitor.getPlatform() !== 'web';
type HistoryLocationState = ReturnType<typeof useHistory>;
type NavigationType = NextRouter & HistoryLocationState;
export enum SCREEN {
  home = 'home',
  login = 'login',
  forget_password = 'forget-password',
  register = 'register',
  location = 'location',
  fill_address = 'fill-address',
  add_new_address = 'add-new-address',
}
const prefix = {
  [SCREEN.home]: '/home',
  [SCREEN.login]: '/login',
  [SCREEN.register]: '/register',
  [SCREEN.forget_password]: '/forget-password',
  [SCREEN.location]: '/location',
  [SCREEN.add_new_address]: '/location/add',
  [SCREEN.fill_address]: '/location/add/fill',
};

type Props = {
  navigation: NextRouter & HistoryLocationState;
  goBack: () => void;
  push: (url: keyof typeof prefix) => void;
  pushRaw: (url: string) => void;
  replaceScreen: (url: keyof typeof prefix) => void;
};
export const useNavigation = (): Props => {
  const history = useHistory();
  const router = useRouter();
  const navigation = useMemo(
    () => (isWeb ? router : history) as NavigationType,
    []
  );
  const goBack = useCallback(() => {
    if (isWeb) {
      navigation.back();
    } else {
      navigation.goBack();
    }
  }, []);

  const pushScreen = useCallback((url: keyof typeof prefix) => {
    console.log('isWeb: ' + isWeb);
    navigation.push(prefix[url] ?? '');
  }, []);

  const pushScreenWithRawLink = useCallback((url: string) => {
    console.log('isWeb: ' + isWeb);
    navigation.push(url ?? '');
  }, []);

  const replaceScreen = useCallback((url: keyof typeof prefix) => {
    navigation.push(prefix[url] ?? '');
  }, []);

  return {
    navigation,
    goBack,
    replaceScreen: (url: keyof typeof prefix) => replaceScreen(url),
    pushRaw: (url: string) => pushScreenWithRawLink(url),
    push: (url: keyof typeof prefix) => pushScreen(url),
  };
};
