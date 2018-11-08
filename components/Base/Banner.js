import React from 'react';
import { Segment, Image, Rail, Header } from 'semantic-ui-react';
import WavyBannerSvg from './WavyBannerSvg.js'
import './index.css';


export default ({title}) => (
<Segment className="banner-content" vertical style={{padding: 0, borderBottom: 0}}>
    <Image fluid src='/static/images/faqs/banner.png' />
    <Rail size='massive' internal position='left' style={{}}>
        <Segment vertical style={{padding: 0, borderBottom: 0, position: 'absolute', left: 100,  bottom: 0, width: 400, zIndex: 2 }}>
            <Image fluid src='/static/images/faqs/shell.png' />
            <Rail size='massive' internal position='left' style={{paddingLeft: 120, top: 60}}>
                <Header size="large">{title}</Header>
            </Rail>
        </Segment>
    </Rail>
    <WavyBannerSvg/>
</Segment>
)