import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonPage,
} from '@ionic/react';
import { newspaper, home, person } from 'ionicons/icons';
import IonHome from './home/IonHome';
import { useAppSelector } from '@monorepo/function-shares';
import { useState, useEffect } from 'react';

const Order = () => (
  <IonPage>
    <div>tab đơn hàng</div>
  </IonPage>
);
const Account = () => (
  <IonPage>
    <div>tab tài khoản</div>
  </IonPage>
);
const Tabs = () => {
  const [loading, setLoading] = useState(true);

  const token = useAppSelector((state) => state.auth.token);
  const isAuth = token !== undefined;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return !loading ? (
    <IonTabs>
      <IonRouterOutlet mode="ios">
        <Route path="/tabs/home" component={IonHome} exact={true} />
        <Route path="/tabs/order" component={Order} exact={true} />
        <Route path="/tabs/account" component={Account} exact={true} />
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/home" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" hidden={!isAuth}>
        {/* @ts-ignore */}
        <IonTabButton
          tab="tab1"
          href="/tabs/home"
          style={{ '--color-selected': '#ef224e' }}
        >
          <IonIcon icon={home} />
          <IonLabel>Mio</IonLabel>
        </IonTabButton>
        {/* @ts-ignore */}
        <IonTabButton
          tab="tab2"
          href="/tabs/order"
          style={{ '--color-selected': '#ef224e' }}
        >
          <IonIcon icon={newspaper} />
          <IonLabel>Đơn hàng</IonLabel>
        </IonTabButton>
        {/* @ts-ignore */}
        <IonTabButton
          tab="tab3"
          href="/tabs/account"
          style={{ '--color-selected': '#ef224e' }}
        >
          <IonIcon icon={person} />
          <IonLabel>Tài khoản</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  ) : null;
};

export default Tabs;
