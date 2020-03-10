import React from 'react';
import { FabButtonStyle } from './style';

const FabButton = props => {
    return (
        <FabButtonStyle {...props}>
            {props.title && <FabButtonStyle.Text>{props.title}</FabButtonStyle.Text>}
            {props.children}
        </FabButtonStyle>
    );
};


export default FabButton;