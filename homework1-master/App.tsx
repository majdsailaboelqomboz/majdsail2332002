import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Head from './component/Head/Header';
import AddItem from './component/AddItem/Additem';
import ShoppingList from './component/ShopingList/ShoppingList';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const [shopList, setShopList] = useState([
    {id: uuidv4(), text: 'book'},
    {id: uuidv4(), text: 'car'},
    {id: uuidv4(), text: 'key'},
]);

  const HandleNewItem = (newItem) => {
    setShopList([...shopList ,  newItem])
  };

    const deleteHandler = (id) =>{
      setShopList(shopList.filter(item => item.id !== id));
    }  

  return (
    <View style={Styles.container}>
      <Head />
      <AddItem onAddItemHandler={HandleNewItem} />
      <ShoppingList list={shopList} deleteItem={deleteHandler}/>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
