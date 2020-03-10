import styled from 'styled-components';
import { View, Text } from 'react-native';

const ToolbarStyle = styled(View)`
    background-color: #e33054;
    width: 100%;
    min-height: 45px;
    display: flex;
    justify-content: center;
    padding: 5px 15px;
    padding-top: 30px;
`;

const ToolbarText = styled(Text)`
    color: #fff;
    font-weight: bold;
`;

const ToolbarRow = styled(View)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

ToolbarStyle.Text = ToolbarText;
ToolbarStyle.Row = ToolbarRow;

export { ToolbarStyle }; 