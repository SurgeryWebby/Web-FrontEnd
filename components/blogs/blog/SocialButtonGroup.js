import React from 'react';
import { Button, Segment, Grid, Icon } from 'semantic-ui-react';

const { Column } = Grid;

export default ({vertical}) =>
        <Button.Group basic vertical={vertical}>
            <Button className="social-button">
                <Segment vertical style={{padding: 0}}>
                    <Icon name='twitter' size='large' />
                    <p>Tweet</p>
                </Segment>
            </Button>
            <Button className="social-button">
                <Segment vertical style={{padding: 0}}>
                    <Icon name='facebook' size='large' />
                    <p>Share</p>
                </Segment></Button>
            <Button className="social-button">
                <Segment vertical style={{padding: 0}}>
                    <Icon name='envelope' size='large' />
                    <p>E-mail</p>
                </Segment></Button>
        </Button.Group>