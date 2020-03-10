import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

const FabButtonStyle = styled(TouchableOpacity)`
    background-color: #f50057;
    width: ${props => props.size ? props.size : '56px'};
    height: ${props => props.size ? props.size : '56px'};
    border-radius: 50;
    position: ${props => props.type === 'fixed' ? 'absolute' : 'relative'};
    right: ${props => props.type === 'fixed' ? "20px" : "auto"};
    bottom: ${props => props.type === 'fixed' ? "20px" : "auto"};
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled(Text)`
    color: #fff;
`;

FabButtonStyle.Text = ButtonText;

export { FabButtonStyle };