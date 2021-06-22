/* eslint-disable import/no-anonymous-default-export */

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import contactsReducer from './phonebook/reducer';
import authReducer from './auth/auth-reducer';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}), logger];
  
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token'],
}


 
const store = configureStore({
    reducer: {
    contacts: contactsReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  
    devTools: process.env.NODE_ENV !== 'production',
    middleware,
})

const persistor = persistStore(store);

export default {store, persistor};