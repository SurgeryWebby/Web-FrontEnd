import React from 'react';
import { Button, Segment, Icon } from 'semantic-ui-react';

const SocialCententStyle = {
    fontFamily: 'Prompt'
}
export default ({ vertical }) =>
    <Button.Group basic vertical={vertical}>
        <Button className="social-button">
            <Segment vertical style={{ padding: 0 }}>
                <Icon name='twitter' size='large' />
                <p style={SocialCententStyle}>Tweet</p>
            </Segment>
        </Button>
        <Button className="social-button">
            <Segment vertical style={{ padding: 0 }}>
                <Icon name='facebook' size='large' />
                <p style={SocialCententStyle}>Share</p>
            </Segment></Button>
        <Button className="social-button">
            <Segment vertical style={{ padding: 0 }}>
                <Icon name='envelope' size='large' />
                <p style={SocialCententStyle}>E-mail</p>
            </Segment></Button>
    </Button.Group>