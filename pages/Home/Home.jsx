import React from "react";
import { Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from "react-native";
import Profile_Collection from "../../components/Profile_Collection";
const Home = ({ navigation }) => {

    return (
        <View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#000', }}>Your All Collection</Text>
            </View>
            {/*  style={{ backgroundColor: '', }} */}
            <SafeAreaView>
                <ScrollView>
                    <Profile_Collection navigation={navigation} />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default Home;