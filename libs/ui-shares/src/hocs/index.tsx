
import React, { Children } from 'react';
import {
  IonPage,
  IonContent,
} from '@ionic/react';
import { isWeb } from '@monorepo/function-shares';
export const withIonicPage = (Component: React.FC) => {
  return React.memo((props) => (
    <div style={{ flex: 1, height: '100%' }}>
      {isWeb ? (
        <Component {...props} />
      ) : (
        <IonPage>
        <IonContent>
          <Component {...props} />
        </IonContent>
      </IonPage>
      )}
    </div>
  ));
};

export default withIonicPage;