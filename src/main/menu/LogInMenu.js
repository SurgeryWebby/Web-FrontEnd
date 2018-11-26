import React from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';

const LogInStyle = {
    backgroundColor: '#C39D5C',
    marginTop: '10px',
    marginBottom: '0px',
    color: 'white',
    fontFamily: 'ButlerRegular',
    fontSize: 16,
};

const LogInSegmentStyle = {
    paddingRight: 0,
    paddingTop: 0,
};

const LogInMenu = () => (
    <Menu.Menu position="right">
        <Segment basic style={LogInSegmentStyle}>
            <Button size="large" style={LogInStyle} content="Log In" />
        </Segment>
    </Menu.Menu>
);

export default LogInMenu;
