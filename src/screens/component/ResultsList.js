import React from 'react';
import { useNavigation } from "@react-navigation/native";
import{View,Text,StyleSheet, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail';
import { FlatList } from 'react-native-gesture-handler';
const ResultList=({title,results})=>{
    const navigation = useNavigation();
    if (!results.length) {
      return null;
    }
    return (
        <View>
            <Text style={styles.title}>
{title}
            </Text>
           <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result=>result.id}
            renderItem={({item})=>{
                
              return( <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ResultsShow", { id: item.id })
                }
              >
                <ResultDetail results={item}/>
              </TouchableOpacity>
                )            }}
           />
        </View>
    );
};
const styles=StyleSheet.create({

    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }
});
export default ResultList
