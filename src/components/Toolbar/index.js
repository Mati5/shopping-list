import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import { ToolbarStyle } from './style';

const Toolbar = (props) => {
    return (
        <ToolbarStyle>
            <ToolbarStyle.Row>
                <ToolbarStyle.Text>{props.title}</ToolbarStyle.Text>
                <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
                    <Icon name="settings" 
                            size={15}
                            style={{color: "#fff"}} />
                </TouchableOpacity>
            </ToolbarStyle.Row>
            {props.children}
        </ToolbarStyle>
    );
};

export default Toolbar;