import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, SectionList, Animated } from 'react-native';
import { connect } from 'react-redux';
import { addProduct, addBoughtProduct, fetchProductList } from '../../store/ShoppingList/action';

import Toolbar from '../../components/Toolbar/index';
import Input from '../../components/Input/index';
import Card from '../../components/Card/index';
import { CardStyle } from '../../components/Card/style';

const ShoppingListScreen = ({ navigation, productList, boughtProductList, productCategoryList, addProduct, addBoughtProduct, fetchProductList }) => {
    const [productName, setProductName] = useState('');
    const [predictCategory, setPredictCategory] = useState([]);

    const filterCategory = (value) => {
        setProductName(value);
        if(value.length>0) {
            const filteredCategoryList = productCategoryList.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));

            if(filteredCategoryList.length===1 && filteredCategoryList[0].name === value) {
                setPredictCategory(filteredCategoryList);
            } else {
                setPredictCategory([{id: 0, name: value, category: 'default'} , ...filteredCategoryList]);
            }
            
        } else {
            setPredictCategory([]);
        } 
    }

    useEffect(() => {
        fetchProductList();

    }, [fetchProductList]);

    let productListLayout = [];

    if(predictCategory.length>0) {
        productListLayout = (<FlatList data={predictCategory} keyboardShouldPersistTaps='handled'
                                    renderItem={({item}) => <Card key={item.id} 
                                    data={item} 
                                    action={() => {addProduct(item); setPredictCategory([]); setProductName('')}} 
                                    addButton /> } /> );
    } else {
        productListLayout = ( 
            <SectionList sections={[{ title: '', data: productList }, { title: 'Removed products', data: boughtProductList }]}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => 
                                                <Card key={item.id} 
                                                      data={item} 
                                                       action={() => {addBoughtProduct(item)}} />
                                            }
                renderSectionHeader={({ section: { title } }) => ( 
                    title.length>0 && boughtProductList.length>0 && (
                        <CardStyle.Category>
                            <Text style={{paddingLeft: 10}}>{title}</Text>
                        </CardStyle.Category> 
                    )
            )} />
       );
    }

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Toolbar title="Shopping list" navigation={navigation}>
                <Input onChangeText={text => filterCategory(text)}
                       value={productName}
                       placeholder="I need" />
            </Toolbar>

            {productListLayout}
        </View>
    );
};

const mapStateToProps = state => ({
    productList: state.shoppingList.productList,
    boughtProductList: state.shoppingList.boughtProductList,
    productCategoryList: state.shoppingList.productCategory
});

const mapDispatchToProps = {
    addProduct,
    addBoughtProduct,
    fetchProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);