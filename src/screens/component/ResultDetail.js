// import React from 'react';
// import{View,Image,Text,StyleSheet} from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
// const ResultDetail=({title,results})=>{
//     return (
//         <View>
//             <Image style={styles.image}source={{uri:results.image_url}}/>
//          <Text>{results.name}</Text>
//         </View>
//     );
// };
// const styles=StyleSheet.create({
// image:{
//     width:250,
//     height:150,
//     borderRadius:4,
// }
   
// });
// export default ResultDetail;
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native'; // Change import from 'react-native-gesture-handler' to 'react-native'

const ResultDetail = ({ title, results }) => {
    return (
        <View style={styles.container} > 
            <Image style={styles.image} source={{ uri: results.image_url }} />
            <Text style={styles.name} >{results.name}</Text>
            <Text>{results.rating} stars,{results.review_count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        marginBottom:10
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4,
        marginBottom:5

    },
    name :{
        fontWeight:'bold',
        fontSize:18
    }
});

export default ResultDetail;
