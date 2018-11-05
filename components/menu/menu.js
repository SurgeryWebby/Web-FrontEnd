import React, { Component } from 'react'
import { Menu, Segment, Container, Grid, Button, Divider, Icon, Label, Image, Responsive, GridRow, GridColumn } from 'semantic-ui-react'

const HOME = 'Home'
const PACKAGE = 'Package'
const BLOG = 'Blog'
const ABOUTUS = 'About Us'
const FAQ = 'FAQ'

const menuStyle = {
  borderColor: "white",
  marginTop: "0px",
}

const topMenuStyle = {
  backgroundColor: "#857664",
  marginBottom: "0px",
  paddingBottom: "5px"
}

const loginStyle = {
  backgroundColor: "#C39D5C",
  marginTop: "10px",
  marginBottom: "0px"
}

const gridRowMenuStyle = {
  paddingTop: "0px"
}

const gridColumnTopMenu = {
  paddingTop: "5px"
}

class MenuDefault extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Grid>
            <GridRow style={topMenuStyle}>
              <Container size='small'>
                <Grid columns='equal' style={gridColumnTopMenu}>
                  <GridColumn floated='left'>
                    <font color='white'>0833109505</font>&nbsp;&nbsp;|&nbsp;<Icon link name='facebook f' inverted></Icon>   
                  </GridColumn>
                  <GridColumn floated='right' textAlign='right'>
                    <font color='white'>EN</font>&nbsp;&nbsp;|&nbsp;<font color='white'>TH</font>
                  </GridColumn>
                </Grid>
              </Container>
            </GridRow>
            <GridRow style={gridRowMenuStyle}>
              <Container>
                <Menu pointing secondary borderless stackable size='small' style={menuStyle}>
                  <Container>
                    <Menu.Item header>
                      <Image size='mini' src='/static/menu/logo.png' style={{ marginRight: '1.5em' }} />
                    </Menu.Item>
                    <Menu.Item name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} />
                    <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} />
                    <Menu.Item name={BLOG} active={activeItem === BLOG} onClick={this.handleItemClick} />
                    <Menu.Item name={ABOUTUS} active={activeItem === ABOUTUS} onClick={this.handleItemClick} />
                    <Menu.Item name={FAQ} active={activeItem === FAQ} onClick={this.handleItemClick} />
                    <Menu.Menu position='right'>
                      <Button size='small' style={loginStyle}>
                        <font color='white'>Log In</font>
                      </Button>
                    </Menu.Menu>
                  </Container>
                </Menu>
              </Container>
            </GridRow>
          </Grid>
          
      )
    }
  }

export default MenuDefault
