import React from 'react';
import { Item } from 'semantic-ui-react';

const BlogContentStyle = {
    fontFamily: 'Prompt',
    fontSize: 14
}

export default ({blog}) => <Item>
    <Item.Image src={blog.image} />
    <Item.Content>
    <Item.Description style={BlogContentStyle}>
        <p>{blog.title}</p>
    </Item.Description>
    </Item.Content>
</Item>