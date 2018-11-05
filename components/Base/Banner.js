import React from 'react';
import { Segment, Image, Rail, Header } from 'semantic-ui-react';

export default ({title}) => <Segment vertical style={{padding: 0, borderBottom: 0, position: 'realtive' }}>
    <Image fluid src='/static/images/faqs/banner.png' />
    <Rail size='massive' internal position='left' style={{}}>
    <Segment vertical style={{padding: 0, borderBottom: 0, position: 'absolute', bottom: 0, width: 300 }}>
        <Image fluid src='/static/images/faqs/shell.png' />
        <Rail size='massive' internal position='left' style={{paddingLeft: 100, top: 40}}>
            <Header size="big">{title}</Header>
        </Rail>
    </Segment>
    </Rail>
</Segment>