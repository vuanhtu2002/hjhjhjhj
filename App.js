import {Button, Modal, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import { useState } from 'react';
import ProductList from './ProductText/ProductList';

export default function App() {
  
  // const [showStatus, setshowStatus] = useState(true);
  const data=[
    {
      id:1,
      name: 'Iphone 12',
      price: '11.000.000',
    },
    {
      id:2,
      name: 'Iphone 13',
      price: '12.000.000',
    },

  
];
  const [ProductList, setproductlist] = useState(data);
  const [isShowAdd, setShowAdd] = useState(true);
  const [namevalue, setnamevalue]= useState('');
  const [pricevalue,setpricevalue]=useState(0);

  const handleAdd = ()=>{
    // khi bam luu se goi ham nay

    const newItem = {
      id: ProductList[ProductList.length-1].id+1,
      name:namevalue,
      price:pricevalue,
    };
    // them phan tu moi vao mang sau do cap nhat lai danh sach
    // ... se lay ra toan bo phan tu cua mang sau do ghep voi phan tu moi
    const newproductlist = [...ProductList, newItem];
    //3 cap nhat danh sach moi de hien thi 
    setproductlist(newproductlist);
    //b4 cap nhap input ve gia tri mac dinh va dong modul
    setnamevalue('');setpricevalue(0);setShowAdd(false);
  };
  return (


    <View style={styles.container}>
     {isShowAdd
     ? null
     :<Button title='Them moi' onPress={() => setShowAdd(true)}></Button>
    }
      
{/* 
      <Text style={styles.text}>Ho ten: Vu Anh Tu</Text>
      <Text style={styles.text}>MSV: PH23040</Text>
      <Button title={'Them moi'}
              onPress={()=> setshowStatus(!showStatus)}
      ></Button>
      {
        showStatus
         ? 
         <>
         

      <TextInput id='name' style={styles.input} placeholder="Nhap ho ten"></TextInput>
      <TextInput id='msv' style={styles.input} placeholder="MSV"></TextInput>
      <TextInput id='link' style={styles.input} placeholder="Link"></TextInput>

      <Button title='Huy'
              onPress={()=> setshowStatus(!showStatus)}></Button> 
              {
                showStatus
                ?
                <>
                <ProductList />
                </>
                  : null
              }
              
      <Button title='Luu'></Button>
              
      
      </>
        
         : null   
      } */}

   
    <Modal visible={isShowAdd} animationType="slider">
    <View>
      <Text>{namevalue}</Text>
      <TextInput placeholder='Ten san pham' 
      value={namevalue}
      onChangeText={(text) => setnamevalue(text)}></TextInput>
      <TextInput placeholder='Gia san pham' keyboardType='numeric'
      value={pricevalue}
      onChangeText={(text) => setpricevalue(text)}></TextInput>
      <Button title='Huy' onPress={()=> setShowAdd(false)}></Button>
      <Button title='Luu' onPress={() => handleAdd()}></Button>
    </View>
    
    </Modal>
    {/* <ProductList></ProductList> */}
    <FlatList
      data={ProductList}
      renderItem={({item}) => <View>
        <Text>Ten sp: {item.name}</Text>
        <Text>Gia sp: {item.price}</Text>
      </View>}
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "green",
    fontStyle:"italic",
    fontWeight:"bold",
    fontSize: 18,
  },
  input:{
    borderWidth: 0.6,
    margin: 5,
    height: 25,
    width: 300,
  }
});
