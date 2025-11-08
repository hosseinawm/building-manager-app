import { TypedUseSelectorHook, useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

// third-party
import { configureStore } from '@reduxjs/toolkit';
import { managementApi } from 'services/managementApi';
import { persistStore } from 'redux-persist';
// project imports
import rootReducer from './reducer';

// ==============================|| REDUX - MAIN STORE ||============================== //

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }).concat(managementApi.middleware)
});

const persister = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persister, dispatch, useSelector, useDispatch };
