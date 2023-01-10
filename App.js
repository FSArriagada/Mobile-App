import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Add a new task'/>
        <Button title='Add' color='#521945'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2EF',
  },
  inputContainer: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  input: {
    borderBottomColor: '#912f56',
    borderBottomWidth: 1,
    height: 40,
    width: '75%' ,

  }
});

