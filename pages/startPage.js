import { StyleSheet, Text, View } from "react-native";

import Card from "../components/Card";
import colors from "../constants/colors";
import react from "react";

const startPage = (props) => {

    <View style={styles.screen}>
        <Text style={styles.title}>Bienvenido</Text>
        <Card>

        </Card>


    </View>    


}

const styles = StyleSheet.create({

    screen:{
        flex: 1,
        fontFamily: 'Cabin',
        backgroundColor: colors.primary
    },

    title:{
        fontFamily: 'cabinBold',
        backgroundColor: colors.accent

    }


})


export default startPage;