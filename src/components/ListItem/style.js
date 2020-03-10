import styled from 'styled-components';
import { View, Text } from 'react-native';


const ListItemStyle = styled(View)`
    
`;

const ListItemHeader = styled(View)`
    border-bottom-width: 1px;
    border-style: solid;
    border-bottom-color: #ccc;

    padding: 10px;
    margin-bottom: 10px;
`;

const ListItemText = styled(Text)`
    color: #222;
`;

const ListItemContent = styled(View)`
    padding: 0 10px;
`;

ListItemStyle.Header = ListItemHeader;
ListItemStyle.Text = ListItemText;
ListItemStyle.Content = ListItemContent;

export { ListItemStyle };