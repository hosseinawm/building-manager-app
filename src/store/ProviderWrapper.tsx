'use client';

import { ConfigProvider } from 'contexts/ConfigContext';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import NavigationScroll from 'layout/NavigationScroll';
import { ReactNode, useEffect, useState } from 'react';
// third-party
import { Provider } from 'react-redux';
import { dispatch, store } from 'store';
import { getMenu } from 'store/slices/menu';
import ThemeCustomization from 'themes';
import Snackbar from 'ui-component/extended/Snackbar';
// import { PersistGate } from 'redux-persist/integration/react';
// project-import
import Loader from 'ui-component/Loader';
import Locales from 'ui-component/Locales';
import RTLLayout from 'ui-component/RTLLayout';

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getMenu()).then(() => {
      setLoading(true);
    });
  }, []);

  if (!loading) return <Loader />;

  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persister}> */}
      <ConfigProvider>
        <ThemeCustomization>
          <RTLLayout>
            <Locales>
              <NavigationScroll>
                <AuthProvider>
                  <>
                    <Snackbar />
                    {children}
                  </>
                </AuthProvider>
              </NavigationScroll>
            </Locales>
          </RTLLayout>
        </ThemeCustomization>
      </ConfigProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}
