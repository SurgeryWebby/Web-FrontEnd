import React from 'react';
import { Item } from 'semantic-ui-react';

export default ({blog}) => <Item>
    <Item.Image size='small' src={blog.image} />
    <Item.Content>
    <Item.Description>
        <p>{blog.title}</p>
    </Item.Description>
    </Item.Content>
</Item>