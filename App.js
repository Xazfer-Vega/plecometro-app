import { StyleSheet, Text, View } from 'react-native';
import Navegation from './components/navigation/Navegation';

export default function App() {
  return (
    <Navegation></Navegation>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});