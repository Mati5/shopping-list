import styled from 'styled-components';
import { View } from 'react-native';

const ModalView = styled(View)`
    background-color: #ccc;
    border-radius: 8px;
`;

const Content = styled(View)`
    padding: 10px;
`;

const Footer = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`;

ModalView.Content = Content;
ModalView.Footer = Footer;


export { ModalView };