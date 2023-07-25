import React from 'react';
import {Home} from './src/screen';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store, persistor} from './src/redux/store';
import {withWalletConnect} from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';

StatusBar.setHidden(true);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

export default withWalletConnect(App, {
  bridge: 'https://bridge.walletconnect.org',
  clientMeta: {
    url: 'https://mixo.xyz',
    icons: [''],
    name: 'mixo',
    description: 'web3 music',
  },
  redirectUrl: 'mixo://',
  storageOptions: {
    asyncStorage: AsyncStorage as any,
  },
});
