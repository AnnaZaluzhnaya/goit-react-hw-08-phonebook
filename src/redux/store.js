import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  filterReducer,
  entities,
  isLoading,
  error,
} from './contacts/contactsReducer';
import {
  persistStore,
  REGISTER,
  REHYDRATE,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const rootReducer = {
  contacts: combineReducers({
    entities,
    filter: filterReducer,
    isLoading,
  }),
  error,
};

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
