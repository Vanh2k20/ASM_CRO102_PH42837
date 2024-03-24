import { useEffect, useState } from 'react';
import AuthNavigator from './navigator/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './Layout/WelcomeScreen';
import MainNavigator from './navigator/MainNavigator';


export default function App() {

  const [checkWelcome, setcheckWelcome] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setcheckWelcome(false);
    }, 2000);
    return () => clearTimeout(timeout)
  }, [])

  return (
    checkWelcome
      ? <WelcomeScreen />
      : <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    // <NavigationContainer>
    //   <MainNavigator/>
    // </NavigationContainer>
  );

}

