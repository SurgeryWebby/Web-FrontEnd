import React from 'react';
import { List } from 'semantic-ui-react';

const TopMenuContentStyle = {
    fontFamily: 'ButlerRegular',
    fontSize: 14,
};

const Language = () => (
    <List horizontal divided inverted link verticalAlign="middle" floated="right" style={TopMenuContentStyle}>
        <List.Item as="a" href="#" active>EN</List.Item>
        <List.Item as="a" href="#">TH</List.Item>
    </List>
);

export default Language;
