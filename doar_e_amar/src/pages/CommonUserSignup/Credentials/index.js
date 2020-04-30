import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

import Progress from '../components/Progress';

function Credentials() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {navigate} = useNavigation();

  function proceedSignup() {
    if (password !== confirmPassword) {
      return Alert.alert('Ops..', 'As senhas devem coincidir');
    }

    return navigate('PersonalData', {
      email,
      password,
    });
  }

  return (
    <View style={styles.container}>
      <Progress
        step={1}
        maxSteps={3}
        currentStep="Credenciais de acesso"
        nextStep="Dados pessoais"
      />

      <Text style={styles.label}>SEU E-MAIL *</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>SUA SENHA *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>CONFIRME SUA SENHA *</Text>
      <TextInput
        style={styles.input}
        placeholder="Sua senha"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={proceedSignup}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Credentials;
