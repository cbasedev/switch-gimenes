import { StyleSheet, View } from "react-native";

import react from "react";

const Card = props => (

    <View style={{ ...styles.card, ...props.styles}}>
        { props.children }
    </View>  

)


const styles = StyleSheet.create({

    card:{
        padding: '10%',
        width: '90%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
   } 

})    

export default Card