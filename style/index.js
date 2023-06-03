import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    Title:{
        fontSize : 50,
        fontWeight : 800,
        marginBottom: 10,
        color: '#E84545',
        alignSelf: 'center',
        letterSpacing:9
    },
    subTitle:{
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 80,
        alignItems: 'center',
        color: '#E84545',
        alignSelf: 'center'
    },
    textuser: {
        paddingLeft: 20,
        fontSize: 18,
        color: '#fff',
        paddingBottom:12,
        marginTop:20
    },
    areatext: {
        // padding: 12,
        // paddingBottom: 0,
        // borderWidth: 2,
        // borderRadius: 10,
        // borderColor: '#FFF',
        // paddingTop: 20
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
    },
    ItemList : {
        margin: 10,
        backgroundColor : '#fff',
        padding: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        flexDirection : 'row',
        borderRadius: 10,
    },
    ItemList_Left : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    ItemList_Right : {
        alignContent: 'center',
        justifyContent: 'center'
    },
    ButtShare : {
        justifyContent: 'center',
        alignItems: 'center'
    },

});