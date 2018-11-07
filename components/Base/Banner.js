import React from 'react';
import { Segment, Image, Rail, Header } from 'semantic-ui-react';
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
    <div className="banner-wave" >
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height: '100%', width: '100%'}}>
        <path d="M-26.60,146.53 C192.05,36.02 283.16,217.59 541.91,116.94 L516.39,170.22 L0.00,150.00 Z" style={{stroke: 'none', fill: 'white'}}></path>
        </svg>
    </div>
</Segment>
)