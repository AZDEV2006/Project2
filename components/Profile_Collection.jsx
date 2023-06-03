import React from "react";
import { Button, Image, Text, TouchableOpacity, View, Clipboard, Alert } from "react-native";
import {styles} from "../style/index";
import Ionicons from '@expo/vector-icons/Ionicons';
const Profile_Collection = ({ navigation }) => {
    // const [clipboard, setclipboard] = React.useState('');
    const handleIntoCollection = (id) => {
        // GetId PocketBase;
        console.log(navigation)
        navigation.navigate('Punch', { id: 2 })
        console.log(id)
    }

    const handleshare = (id) => {
        console.log(id);
        Clipboard.setString(`${id}`)
        Alert.alert('System', `Copied Id for share ${id}`)
    }
    return (
        <>
        
        <TouchableOpacity style={styles.ItemList} onPress={() => handleIntoCollection(1)}>
            <View style={styles.ItemList_Left}>
                <Image source={{ uri: 'https://variety.com/wp-content/uploads/2022/08/Jonah-Hill.jpg?w=1000' }} resizeMode="contain" style={{ width: 100, height: 100, borderRadius: 10 }} />
                <View style={styles.NameAll}>
                    <Text style={{ fontSize: 25 }}>
                        สมชาย
                    </Text>
                    <Text style={{ fontSize: 15 }}>
                        จำนวนโดนต่อย 10 ครั้ง
                    </Text>
                </View>
            </View>
            <TouchableOpacity style={styles.ButtShare} onPress={() => handleshare(1)}>
                <Ionicons name="return-up-forward-outline" size={40} />
            </TouchableOpacity>
        </TouchableOpacity>
        </>
    )
}

export default Profile_Collection;