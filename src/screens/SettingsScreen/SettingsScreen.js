import React, { useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, Button } from 'react-native';
import Modal from "react-native-modal";
import { ModalView } from '../../components/ModalView/style';

import ListItem from '../../components/ListItem/index';
import { clearShoppingList } from '../../store/ShoppingList/action';

const SettingsScreen = ({ clearShoppingList }) => {
    const [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

    const clearShoppingListHandler = (value) => {
        if(value) {
            clearShoppingList();
        }
        
        setVisibleDeleteModal(false);
    }

    return (
        <View>
            <ListItem  title="Clear shopping list">
                <Button title="Clear"
                        onPress={() => setVisibleDeleteModal(true) } />
            </ListItem>

            <Modal isVisible={visibleDeleteModal}>
                <ModalView>
                    <ModalView.Content>
                        <Text>Are you sure you want to delete all shopping products?</Text>
                    </ModalView.Content>
                    <ModalView.Footer>
                        <View style={{marginRight: 8}}>
                            <Button title="No" 
                                    onPress={() => clearShoppingListHandler(false)}
                                    color="#C70000" />
                        </View>
                        <Button title="Yes" onPress={() => clearShoppingListHandler(true)} />
                    </ModalView.Footer>
                </ModalView>
            </Modal>
        </View>
    );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
    clearShoppingList
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);