import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppScreen from './app/components/AppScreen';
import WelcomeScreen from "./app/screens/WelcomeScreen"
export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen>

      </WelcomeScreen>

</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
