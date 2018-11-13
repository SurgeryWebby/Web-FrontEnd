import React from 'react';
import { Item } from 'semantic-ui-react';
import RelatedBlogItem from './RelatedBlogItem';

export default ({blogs}) => <Item.Group>
    {blogs.map((b, index) => <RelatedBlogItem key={'blog'+index} blog={b} />)}
</Item.Group>
