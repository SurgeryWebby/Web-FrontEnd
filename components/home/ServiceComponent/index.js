import React from 'react';
import { Grid } from 'semantic-ui-react';
import ServiceItem from './ServiceItem';

const { Column, Row } = Grid

const ServiceGroupStyle = {
    padding: '2rem 2rem',
    backgroundImage: `url('/static/images/home/service-content-background.png')`,
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '75% 100%'
}

const ServiceGroupMobileStyle = {
    padding: '6rem 6rem',
    margin: '0rem -4rem',
    backgroundImage: `url('/static/images/home/service-content-background.png')`,
    backgroundOrigin: 'border-box',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%'
}

export default () =>
    <Grid centered>
        <Row style={ServiceGroupStyle} only='computer'>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
        </Row>
        <Row style={ServiceGroupMobileStyle} only='mobile tablet'>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
            <Column mobile={16} computer={5} style={{padding: 0}}><ServiceItem title='เสริมจมูก' /></Column>
        </Row>
    </Grid>