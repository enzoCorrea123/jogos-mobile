import AsyncStorage from "@react-native-async-storage/async-storage";
import metadata from "../storage.metadata.json";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation })=>{
    const [name, setName] = useState("");
    useEffect(() => { getUserName() }, [])

    const getUserName = async () => {
        const userName = await AsyncStorage.getItem(metadata.USER.USERNAME);
        if (userName) {
            setName(userName);
        }
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            {name &&
                <View>
                    <Text>
                        Olá usuário {name}
                    </Text>
                </View>
            }
            <Button
                title="Go to User Data"
                onPress={() => navigation.navigate("UserData")}
            />
        </View>
    );
}
export default HomeScreen;