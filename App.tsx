import React from 'react';
import { SafeAreaView } from 'react-native';
import TareaScreen from './src/screens/TareaScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import FlexScreen from './src/screens/FlexScreen';
// import ContadorScreen from './src/screens/ContadorScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';
// import DimensionesScreen from './src/screens/DimensionesScreen';
// import PositionScreen from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425b' }}>
      {/* <HolaMundoScreen />
       <ContadorScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

export default App;
