import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ShoppingList = props => {
  return (
    <View style={Styles.listContainer}>
      {props.list.map(item => (
        <TouchableOpacity key={item.id} style={Styles.btn} >
          <View style={Styles.listItemView}>
            <Icon
              name="remove"
              size={20}
              color="firebrick"
              onPress={() => props.deleteItem(item.id)}
            />
            <Text style={Styles.listItemText}>{item.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Styles = StyleSheet.create({
  listContainer: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
    color: 'black',
  },
  btn:{
    marginBottom:10
  }
});

export default ShoppingList;
