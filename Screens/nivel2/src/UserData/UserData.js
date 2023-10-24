import { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import metadata from '../storage.metadata.json';
const Userdata = ()=>{
    const [name, setName] = useState("");
    useEffect(() => { getUserName() }, [])
    useEffect(() => { saveUserName() }, [name]);

    const getUserName = async () => {
        const userName = await AsyncStorage.getItem(metadata.USER.USERNAME);
        if (userName) {
            setName(userName);
        }
    }

    const saveUserName = async () => {
        const saveName = name || "";
        await AsyncStorage.setItem(metadata.USER.USERNAME, saveName);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>User Data</Text>

            <TextInput placeholder="Nome do Usuário" value={name} onChangeText={setName} />
        </View>
    );
}
export default Userdata;