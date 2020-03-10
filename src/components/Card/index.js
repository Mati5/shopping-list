import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import FabButton from '../FabButton/index';
import { CardStyle } from './style';

const renderCategoryIcon = (type) => {
    switch(type) {
        case 'fruits':
            return "food-apple";
        case 'vegetables':
            return "checkbox-blank-circle-outline";
        case 'breadstuff':
            return "food-croissant";
        default:
            return "cart";
    }
}

const renderCategoryTheme = (type) => {
    switch(type) {
        case 'fruits':
            return {
                backgroundColor: "#6db105"
            }
        case 'vegetables':
            return {
                backgroundColor: "#545465"
            }
        case 'breadstuff':
            return {
                backgroundColor: "#c68958"
            }
        default:
            return {
                backgroundColor: 'silver',
            }
    }
}

const Card = props => {
    return (
        
        <CardStyle bought={props.data.bought && props.data.bought.toString()}>
            <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                <FabButton size="30px" style={{marginRight: 10, ...renderCategoryTheme(props.data.category)}}>
                    <Icon name={renderCategoryIcon(props.data.category)} 
                        size={15}
                        style={{color: "#fff"}} />
                </FabButton>
                <CardStyle.Text>{props.data.name}</CardStyle.Text>
            </View>
     
            {!props.data.bought && !props.addButton && 
            <CardStyle.Button bgColor={"#d11a2a"} onPress={() => props.action()}>
                <Icon name="download" size={15} style={{color: '#fff'}} />
            </CardStyle.Button>}

            {props.addButton && <CardStyle.Button onPress={() => props.action()}>
                                    <Icon name="plus" size={15} style={{color: '#fff'}} />
                                </CardStyle.Button>}
        </CardStyle>
    );
};

export default Card;