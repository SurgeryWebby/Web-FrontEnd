import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const BlogHeaderStyle = {
    fontFamily: 'Chonburi',
    fontSize: 18
}

export default ({blog}) => <Card fluid style={{borberColor: '#C39D5C'}}>
    <Image fluid src='/static/images/blogs/blogCover.png' />
    <Card.Content>
        <Card.Header style={BlogHeaderStyle}>{blog.title}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>{blog.shortDescription}</Card.Description>
        <Card.Meta></Card.Meta>
        <Card.Description>
            <a href="/blog" style={{color: '#C39D5C'}}>
                อ่านต่อ
            </a>
        </Card.Description>
    </Card.Content>
</Card>