import { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet, TextInput } from "react-native";
export default function Forca(props) {
    const [usadas, setUsadas] = useState([""])
    const [chute, setChute] = useState("");
    const [erros, setErros] = useState(0);
    const [desenho, setDesenho] = useState("+---+\n" +
        "|\t|\n" +
        "\t|\n" +
        "\t|\n" +
        "\t|\n" +
        "\t|\n" +
        "=======")

    let arrayLinhas = [];
    for (let i = 0; i < props.palavraForca.length; i++) {
        if (props.palavraForca.charAt(i) != " ") {
            arrayLinhas.push(" _ ")
        } else {
            arrayLinhas.push("/")
        }
    }

    const [linhas, setLinhas] = useState(arrayLinhas)
    useEffect(() => {
        mudarDesenho();
    }, [erros]);

    const mudarDesenho = () => {
        switch (erros) {
            case 1:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    "\t|\n" +
                    "\t|\n" +
                    "\t|\n" +
                    "=======");
                break;
            case 2:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    " |\t|\n" +
                    "\t|\n" +
                    "\t|\n" +
                    "=======");
                break;
            case 3:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    "/|\t|\n" +
                    "\t|\n" +
                    "\t|\n" +
                    "=======");
                break;
            case 4:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    "/|\\\t|\n" +
                    "\t|\n" +
                    "\t|\n" +
                    "=======");
                break;
            case 5:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    "/|\\\t|\n" +
                    "/\t|\n" +
                    "\t|\n" +
                    "=======");
                break;
            case 6:
                setDesenho("+---+\n" +
                    " |\t|\n" +
                    "O\t|\n" +
                    "/|\\\t|\n" +
                    "/ \\\t|\n" +
                    "\t|\n" +
                    "=======");

                alert(`Você perdeu! A palavra era ${props.palavraForca}`);
                backHome();
                break;
        }
    }
    const handleCLick = () => {
        const novoArrayLinha = [...linhas];
        const novoArrayUsada = [...usadas];

        const tentativa = chute.toUpperCase();

        let cont = 0;

        if (tentativa.length == 1) {
            for (let i = 0; i < props.palavraForca.length; i++) {
                if (tentativa == props.palavraForca.charAt(i)) {
                    cont++;
                    novoArrayLinha[i] = tentativa;
                    setLinhas(novoArrayLinha);
                    setChute("");

                }

                if (i == props.palavraForca.length - 1 && cont == 0) {
                    novoArrayUsada.forEach((letra) => {
                        if (letra == tentativa) {
                            cont++;
                        }
                    })
                    if (cont == 0) {
                        novoArrayUsada.push(tentativa)
                        setErros(erros + 1);
                        setChute("");
                    }

                }
            }

            if (props.palavraForca.includes(novoArrayLinha.join(""))) {
                alert("Você ganhou")
                backHome();
            }

            setUsadas(novoArrayUsada)
            cont = 0

        } else if (tentativa.length < linhas.length || tentativa.length > linhas.length) {
            setChute("");
            novoArrayUsada.push(` ${tentativa}`);
            setUsadas(novoArrayUsada)
            setErros(erros + 1);

        } else if (tentativa.length == linhas.length) {
            if (tentativa === props.palavraForca) {
                setLinhas(tentativa);
                backHome();
            } else {
                setErros(erros + 1);
                novoArrayUsada.push(` ${tentativa}`);
                setUsadas(novoArrayUsada)
                setChute("");

            }
        }
    }
    const backHome = () => {
        setTimeout(()=>{
            props.changeScreen("Homepage");
        },500)
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.Forca}>
                <Text>{desenho}</Text>
            </View>
            <View style={styles.divChute}>
                <View style={styles.erros}>
                    <Text style={styles.text} >{usadas}</Text>
                    <Text style={styles.text} >Dica: {props.dicaForca.toUpperCase()}</Text>
                </View>
                <View style={styles.divInput}>
                    <Text style={styles.text} >{linhas}</Text>
                    <TextInput style={styles.input} onChangeText={setChute} value={chute} placeholder="Faça seu chute:"></TextInput>
                    <View style={styles.flexButton}>
                        <Pressable style={styles.button} onPress={handleCLick}><Text style={styles.textButton}>Confirmar</Text></Pressable>
                        <Pressable style={styles.button} onPress={()=>{backHome()}}><Text>Voltar</Text></Pressable>
                    </View>
                </View>
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    input: {
        marginTop: 30,
        width: 160,
        height: 20,
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "black",
        fontSize: 15
    },
    flexButton:{
        flexDirection: "row",
        marginLeft: -10
      },
    button: {
        width: 70,
        height: 30,
        margin: 10,
        backgroundColor: "#41B3FF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 30
    },
    divChute: {
        flex: 1,
        justifyContent: "center",
        gap: 20
    },
    erros: {
        height: 20,
        marginBottom: 20
    },
    divInput: {
        fontSize: 15
    }
})