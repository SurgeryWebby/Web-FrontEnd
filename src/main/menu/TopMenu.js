import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import PhoneAndFB from './PhoneAndFB';
import Language from './Language';

const { Row, Column } = Grid;

const ColumnTopMenu = {
    paddingTop: '5px',
};

const TopMenu = () => (
    <Container>
        <Grid columns="equal" style={ColumnTopMenu}>
            <Row>
                <Column floated="left" verticalAlign="middle">
                    <PhoneAndFB />
                </Column>
                <Column floated="right" textAlign="right" verticalAlign="middle">
                    <Language />
                </Column>
            </Row>
        </Grid>
    </Container>
);

export default TopMenu;
