import React, { useState } from "react";
import { View, Text, Image, Button, Clipboard, Alert, TouchableOpacity } from "react-native";

const Punch = ({navigation}) => {

    const [imageBeClicked, setImageBeClicked] = useState(false)
    
    const handleshare = (id) => {
        console.log(id);
        Clipboard.setString(`${id}`)
        Alert.alert('System', `Copied Id for share ${id}`)
    }

    return (
        <View style={{justifyContent: 'center', flex: 1, alignItems: 'center',gap: 10, alignContent: 'center' }}>
            <Text style={{ fontSize: 25 }}>Score Punch : 50</Text>
            <View style={{width:'80%', height:1, backgroundColor: 'red'}}></View>
            <Text style={{ fontSize: 20 }}>stinging now 'สมชาย'</Text>
            <TouchableOpacity onPress={() => {}}>
                <Image  source={{ uri: 'https://variety.com/wp-content/uploads/2022/08/Jonah-Hill.jpg?w=1000' }} resizeMode="contain" style={{ width: 300, height: 300, borderRadius: 10 }} />
            </TouchableOpacity>
            <Button title="Share Collection!" onPress={()=> handleshare(1)} />
        </View>
    )
}

export default Punch;