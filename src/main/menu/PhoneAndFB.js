import React from 'react';
import { List } from 'semantic-ui-react';

const TopMenuContentStyle = {
    fontFamily: 'ButlerRegular',
    fontSize: 14,
    color: 'white',
};

const PhoneAndFB = () => (
    <List horizontal divided style={TopMenuContentStyle}>
        <List.Item>
            <List.Content verticalAlign="middle">081-2345678</List.Content>
        </List.Item>
        <List.Item>
            <List.Icon name="facebook f" link inverted verticalAlign="middle" />
        </List.Item>
    </List>
);

export default PhoneAndFB;
