import {View, Text, TextInput, Image, Dimensions} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../images/logo.jpg'
import { TouchableOpacity } from 'react-native-gesture-handler';
function LoginScreen() {
  const { width } = Dimensions.get('screen')
  const [cpf, setCpf] = useState()
  const [password, setPassword] = useState()

  return (
    <View
    
    style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50
    }}
    >
      <Image
        source={Logo}
        style={{
          width: 150,
          height: 150,
        }}
      />
      
      <View
      style={{
        marginVertical: 15,
        width: '100%'
      }}
      >
        <Text
        style={{
          color: 'black',
          fontSize: 15
        }}
        >
          CPF
        </Text>
        <TextInput
          style={{
            backgroundColor: '#dcdcdc',
            borderRadius: 5,
            paddingHorizontal: 15
          }}
          maxLength={11}
          keyboardType='decimal-pad'
          onChangeText={(text) => {
              setCpf(Number.parseInt(text))
          }}
          value={cpf}
        />
      </View>

      <View
      style={{
        marginVertical: 15,
        width: '100%'
      }}
      >
        <Text
        style={{
          color: 'black',
          fontSize: 15
        }}
        >Senha</Text>
          <TextInput
          style={{
            backgroundColor: '#dcdcdc',
            borderRadius: 5,
            paddingHorizontal: 15
          }}
          secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
      </View>
        
      <TouchableOpacity
      style={{
        marginVertical: 15,
        width: width * 0.75,
        backgroundColor: '#00008B',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center'
      }}  
      onPress={() => {
        // Todo conectar api de login
      }}
      >
            <Text style={{
              color: 'white',
              fontWeight: '800',
              fontSize:20
            }}>Entrar</Text>
        </TouchableOpacity>


      <Text
        onPress={() => {
          alert('ainda nao implementado')
        }}
        style={{
          color:'#2f2c79'
        }}
      >
        Esqueci minha senha
      </Text>


    </View>
  );
}

export default LoginScreen;
