import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

const CardStyle = styled(View)`
    padding: 8px 10px;
    border-style: solid;
    border-bottom-width: 1px;
    border-color: #f1f1f1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    opacity: ${props => props.bought === 'true' ? '0.5' : '1'};
`;

const CardText = styled(Text)`
    color: #222;
`;

const CardButton = styled(TouchableOpacity)`
    background-color: ${props => props.bgColor ? props.bgColor : '#5cb85c'};
    width: 25px;
    height: 25px;
    border-radius: 50;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardCategory = styled(View)`
    background-color: rgba(245, 245, 245, 0.8);
    padding: 8px 0;
`;

CardStyle.Text = CardText;
CardStyle.Button = CardButton;
CardStyle.Category = CardCategory;

export { CardStyle };