import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

import Tabs from './IonTab';
import { useAppSelector } from '@monorepo/function-shares';
import Home from '../pages/home';
import { HomeConsumer } from '@monorepo/ui-shares';
import login from './login';
import register from './register';
import forgetPassword from './forget-password';
import location from './location';
import addNewAddress from './location/add';
import fillAddress from './location/add/fill';
import editLocation from './location/edit/index';

const AppShell = () => {
  const token = useAppSelector((state) => state.auth.token);
  const isAuth = token !== undefined;

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet id="main">
          {/* {isAuth ? <Route path="/" render={() => <Tabs />} /> :  <Route exact path="/" render={() => <Home/>} />} */}
          <Route path="/" render={() => <Tabs />} />
          <Route path="/tabs" render={() => <Tabs />} />
          {isAuth ? (
            <Route exact path="/" render={() => <Redirect to="/tabs" />} />
          ) : (
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          )}
          {/* <Route exact path="/" render={() => <Redirect to="/tabs" />} /> */}
          <Route exact path="/home" render={() => <Home />} />
          <Route path="/login" component={login} exact={true} />
          <Route path="/register" component={register} exact={true} />
          <Route
            path="/forget-password"
            component={forgetPassword}
            exact={true}
          />
          <Route path="/location" component={location} exact={true} />
          <Route path="/location/add" component={addNewAddress} exact={true} />
          <Route
            path="/location/add/fill"
            component={fillAddress}
            exact={true}
          />
          <Route path="/location/edit/:addressId" component={editLocation} />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default AppShell;
