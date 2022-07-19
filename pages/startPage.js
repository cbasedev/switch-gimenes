import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";
import react from "react";

const StartPage = props => {

    return (
        
        <View style={styles.screen}>
            <Text style={styles.title}>
                Al no tener datos Confirmados, se muestra Start Page
            </Text>
            <Card>
                <TextInput
                        style={styles.input}
                        onChangeText={props.setNombre}
                        value={props.nameValue}
                        placeholder="Su Nombre"
                />
                <TextInput
                        style={styles.input}
                        onChangeText={props.setAge}
                        value={props.ageValue}
                        placeholder="Edad"
                        keyboardType="numeric"
                />
                <Button
                onPress={props.onHandlerButton}
                title="Confirmar Datos"
                />
            </Card>
        </View>    
    )

}

const styles = StyleSheet.create({

    screen:{
        flex: 1,
        paddingTop: '5%',
        
    },

    title:{
        color: colors.accent
        
    },

    input:{
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.accent,
        marginBottom: '6%',
        fontFamily: 'OpenSans',
    },

    button:{
        fontFamily: 'OpenSans',
        backgroundColor: colors.buttonPrimary
    }

})


export default StartPage;