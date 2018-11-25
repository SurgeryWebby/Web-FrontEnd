import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopMenu from './TopMenu';
import NavigationMenu from './NavigationMenu';

const { Row } = Grid;

const topMenuStyle = {
    backgroundColor: '#857664',
    marginBottom: '0px',
    paddingBottom: '5px',
};

const gridRowMenuStyle = {
    paddingTop: 0,
    paddingBottom: 0,
};

const MenuDefault = () => (
    <Grid>
        <Row only="computer tablet" style={topMenuStyle}>
            <TopMenu />
        </Row>
        <Row style={gridRowMenuStyle}>
            <NavigationMenu />
        </Row>
    </Grid>
);

export default MenuDefault;
