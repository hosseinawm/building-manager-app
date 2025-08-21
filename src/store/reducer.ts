// third-party
import { combineReducers } from 'redux';

import menuReducer from './slices/menu';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// project imports
import snackbarReducer from './slices/snackbar';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  menu: menuReducer
  // menu: persistReducer(
  //   {
  //     key: 'menu',
  //     storage,
  //     keyPrefix: 'berry-'
  //   },
  //   menuReducer
  // )
});

export default reducer;
