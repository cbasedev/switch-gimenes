import { StyleSheet, View } from "react-native";

import react from "react";

const Card = props => (

    <View style={{ ...style.card, ...props.style}}>
        { props.children }
    </View>  

)


const styles = StyleSheet.create({

   card:{
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