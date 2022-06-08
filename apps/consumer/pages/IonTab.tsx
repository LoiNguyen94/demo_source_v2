import { Redirect, Route } from 'react-router-dom';
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cog, flash, list } from 'ionicons/icons';

import { TabMio } from '@monorepo/ui-shares';

const Tabs = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/mio" component={TabMio} exact={true} />
        {/* <Route path="/tabs/lists" component={Lists} exact={true} /> */}
        {/* <Route path="/tabs/settings" component={Settings} exact={true} /> */}
        <Route
          path="/tabs"
          render={() => <Redirect to="/tabs/mio" />}
          exact={true}
        />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {/* @ts-ignore */}
        <IonTabButton tab="tab1" href="/tabs/mio">
          <IonIcon icon={flash} />
          <IonLabel>Mio</IonLabel>
        </IonTabButton>
        {/* @ts-ignore */}
        <IonTabButton tab="tab2" href="/tabs/lists">
          <IonIcon icon={list} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        {/* @ts-ignore */}
        <IonTabButton tab="tab3" href="/tabs/settings">
          <IonIcon icon={cog} />
          <IonLabel>Settings</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
