import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const AddItem = (props) => {
  const [newItem, setNewItem]= useState('');

  const changeHandler = (text) => {
    setNewItem(text);
  };

  const pressHandler = () => {
    if(newItem){
      let x = {id:uuidv4(), text: newItem}
      props.onAddItemHandler(x);
      setNewItem('');
    }
  };

  return (
    <View style={Styles.ADDContainer}>
      <TextInput
        placeholder="new item"
        placeholderTextColor="gray"
        value={newItem}
        style={Styles.inputText}
        onChangeText={changeHandler}
      />
      <View style={Styles.btn}>
        <TouchableOpacity onPress={pressHandler}>
        <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginRight: 5 }}>Add Item</Text>
            <Icon name="plus" size={20} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  ADDContainer: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    backgroundColor: 'white',
    width: '60%',
    color: 'black',
    marginBottom:10
  },

  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 50,
    backgroundColor:"gray",
    marginBottom:10
    
  },
});

export default AddItem;
