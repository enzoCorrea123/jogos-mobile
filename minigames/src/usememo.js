import { useEffect, useMemo, useState } from "react";
import { Button, Text, View } from "react-native";
import Pagina1 from "./pagina1";
import Pagina2 from "./pagina2";
export default function Homepage(props) {
    const [contador,setContador] = useState(0)
    const [contador2,setContador2] = useState(0)

    useEffect(()=>{
        console.log('Alterou valor de contador')
    },[contador])
    useEffect(()=>{
        console.log('Alterou valor de contador2')
    },[contador2])

    const array = useMemo(()=>{
        console.log("Passou pelo use memo")
        const itens = [...Array(contador)];
        return(
            <View>
                {
                    itens.map((item,i)=>{
                        console.log('passou dentro do map,index ',i);
                        return(
                            <View key={i}>
                                <Text>
                                    Item {i + 1}
                                </Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    },[contador])

    console.log("Antes do return");
    return(
        <View>
            <Text>Contador: {contador}</Text>
            <Button title='Click' onPress={()=> setContador(contador+1)}></Button>
            <Text>Contador 2: {contador2}</Text>
            <Button title='Click' onPress={()=> setContador2(contador2+1)}></Button>
            {array}
            <Pagina1/>
            <Pagina2/>
        </View>
        
    )
}
