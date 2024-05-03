import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './src/services/firebaseConfig';

export default function App() {


  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  function cadastrar(){
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
  });
  }

  return (
    <View style={styles.container}>
      <TextInput
      placeholder='Digite seu email'
      value={email}
      onChangeText={(value)=>setEmail(value)}
      />
      <TextInput
      placeholder='Digite sua senha'
      value={password}
      onChangeText={(value)=>setPassword(value)}
      />

      <TouchableOpacity  onPress={cadastrar}>
        <Text>Enviar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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
