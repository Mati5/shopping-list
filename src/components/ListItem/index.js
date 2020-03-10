import React from 'react';

import { ListItemStyle } from './style';

const ListItem = props => {
    return (
        <ListItemStyle>
            <ListItemStyle.Header>
                <ListItemStyle.Text>{props.title}</ListItemStyle.Text>
            </ListItemStyle.Header>
            <ListItemStyle.Content>
                {props.children}
            </ListItemStyle.Content>
        </ListItemStyle>
    );
};

export default ListItem;