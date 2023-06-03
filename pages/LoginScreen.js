import { StyleSheet, Text, View ,Image, TextInput ,Button, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import { useState } from 'react';
import { styles } from '../style/index';
const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = ()=> {
    if (!username || !password) {
        Alert.alert("","Username or Password must not be empty");
        return
    }
    navigation.navigate("Home")

  }

    
    return(
        <View style ={{padding : 16,flex: 1,justifyContent:'center',backgroundColor: '#2B2E4A'}}>
            <Text style ={styles.Title}>ToiGun</Text>
            <Text style={styles.subTitle}>Login</Text>
            <View style= {{}}>
                <Text style={styles.textuser}>username</Text>
                <TextInput
                    style= {styles.areatext}
                    onChangeText= {setUsername}
                    value = {username}
                />
                <Text style={styles.textuser}>password</Text>
                <TextInput
                    style= {styles.areatext}
                    onChangeText= {setPassword}
                    value = {password}
                />

                <View style={{margin: 15,paddingTop: 30}}>
                    <Button
                        title='Continue Login'
                        color="#903749"
                        onPress = {handleLogin}
                    />
                </View>
                <View style={{margin: 15}}>
                    <Button
                        title='REGISTER'
                        color='#903749'
                        onPress = {() => {
                            navigation.navigate("Register")
                        }}
                    />
                </View>
            </View>

        </View>
    )
}

export default LoginScreen;