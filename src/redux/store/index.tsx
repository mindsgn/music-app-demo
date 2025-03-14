import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {playerReducer, userReducer, APIReducer} from '../reducer';

const persistConfig = {
  key: 'persistedReducer',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  playerReducer,
  userReducer,
  APIReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor};
