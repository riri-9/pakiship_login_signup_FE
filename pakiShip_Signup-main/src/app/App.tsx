import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from '../navigation/RootNavigator';
import { JobsProvider } from '../features/driver/context/JobsContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <JobsProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </JobsProvider>
    </SafeAreaProvider>
  );
}
