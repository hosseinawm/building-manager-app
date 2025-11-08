'use client';

import { ReactNode, useEffect, useState } from 'react';
import { dispatch, store } from 'store';

import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import { JWTProvider as AuthProvider } from 'contexts/JWTContext';
import { ConfigProvider } from 'contexts/ConfigContext';
// import { PersistGate } from 'redux-persist/integration/react';
// project-import
import Loader from 'ui-component/Loader';
import Locales from 'ui-component/Locales';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import NavigationScroll from 'layout/NavigationScroll';
// third-party
import { Provider } from 'react-redux';
import RTLLayout from 'ui-component/RTLLayout';
import Snackbar from 'ui-component/extended/Snackbar';
import ThemeCustomization from 'themes';
import { getMenu } from 'store/slices/menu';

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
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
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
          </LocalizationProvider>
        </ThemeCustomization>
      </ConfigProvider>
      {/* </PersistGate> */}
    </Provider>
  );
}
