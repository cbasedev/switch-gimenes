import { StyleSheet, Text, View } from "react-native-web";

import Card from "../components/Card";
import react from "react";
import { useState } from "react";

const MainPage = props => {

    return (
            <Card>
                <Text style={styles.title}>Con Datos confirmados, se muestran los mismos:</Text>
            </Card>
    )

}

const styles = StyleSheet.create({

    title:{
        fontSize: 25,
        color: 'red'
    }

})


export default MainPage 