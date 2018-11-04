import React, { Component } from 'react'
import { Menu, Segment, Container, Grid, Button, Divider, Icon, Label, Image, Responsive, GridRow, GridColumn } from 'semantic-ui-react'

const gridStyle = {
    backgroundColor: "#857664",
}

class FooterDefault extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Grid style={gridStyle} textAlign='center'>
              <GridColumn width={3}>Test</GridColumn>
              <GridColumn width={6}>Test</GridColumn>
              <GridColumn width={3}>Test</GridColumn>
            {/* <GridRow style={gridRowMenuStyle}>
              <Container>
                <Menu pointing secondary borderless stackable size='small' style={menuStyle}>
                  <Container>
                    <Menu.Item header>
                      <Image size='mini' src='/static/menu/logo.png' style={{ marginRight: '1.5em' }} />
                    </Menu.Item>
                    <Menu.Item name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} />
                    <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} />
                    <Menu.Item name='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick} />
                    <Menu.Item name='About Us' active={activeItem === 'About Us'} onClick={this.handleItemClick} />
                    <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                      <Button size='small' style={loginStyle}>
                        <font color='white'>Log In</font>
                      </Button>
                    </Menu.Menu>
                  </Container>
                </Menu>
              </Container>
            </GridRow> */}
          </Grid>
          
      )
    }
  }

export default FooterDefault
