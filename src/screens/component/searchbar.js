import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.iconstyle} />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
        style={styles.inputstyle}
        placeholder='Search'
        value={term}
        onChangeText={newTerm=>onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop:10,
    height: 50,
    borderRadius: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: '#F0EEEE',
  },
  inputstyle: {
    // borderWidth: 1,
    fontSize:18,
    flex: 1,
  },
  iconstyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
