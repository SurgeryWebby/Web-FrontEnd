import React from 'react';
import { Image, Header } from 'semantic-ui-react';

const ServiceItemStyle = {
    position: 'relative'
}

const TitleStyle = {
    position: 'absolute',
    bottom: '1.2rem',
    left: '1.2rem',
    fontSize: '1.4rem',
    fontFamily: 'Chonburi'
}

export default ({ imagePath, title }) => (
    <div style={ServiceItemStyle}>
        <Image fluid src={imagePath ? imagePath : '/static/images/home/service-content-element.png'} />
        <Header style={TitleStyle}>{title}</Header>
    </div>
)