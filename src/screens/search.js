import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../screens/component/searchbar';
import useResults from '../hooks/useResults';
import ResultList from './component/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, mess] = useResults();
const filterResultsByPrice=(price)=>{
  return results.filter(result=>{
    return result.price===price;
  });
};

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>{mess}</Text>
    
      <ScrollView>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"  naviagtion={navigation}/>
      <ResultList results={filterResultsByPrice('$$')}title="bit Effective" naviagtion={navigation}/>
      <ResultList results={filterResultsByPrice('$$$')}title="Heavy Effective" naviagtion={navigation}/>
     </ScrollView>
      </>
  
  );
};

export default SearchScreen;
