import React, { Component } from 'react'
import { Menu, Segment, Container, Grid, Button, Divider, Icon, Label, Image, Responsive, List } from 'semantic-ui-react'

const { Column, Row } = Grid

const HOME = 'Home'
const PACKAGE = 'Package'
const BLOG = 'Blog'
const ABOUTUS = 'About Us'
const FAQ = 'FAQ'

const EN = 'EN'
const TH = 'TH'

const ColumnTopMenu = {
  paddingTop: "5px"
}
const topMenuStyle = {
  backgroundColor: "#857664",
  marginBottom: "0px",
  paddingBottom: "5px",
}

const gridRowMenuStyle = {
  paddingTop: "0px"
}
const menuStyle = {
  borderColor: "white",
  marginTop: "0px",
}
const loginStyle = {
  backgroundColor: "#C39D5C",
  marginTop: "10px",
  marginBottom: "0px",
  color: "white"
}


class MenuDefault extends Component {
    state = { 
      activeMenuItem: HOME,
      activeLanguage: EN
    }
  
    handleMenuItemClick = (e, { name }) => this.setState({ activeMenuItem: name })
    handleLanguageItemClick = (e, { value }) => this.setState({ activeLanguage: value})
  
    render() {
      const { activeMenuItem } = this.state
  
      return (
          <Grid>
            <Row only='computer tablet' style={topMenuStyle}>
              <Container>
                <Grid columns='equal' style={ColumnTopMenu} >
                  <Row verticalAlign='middle'>
                    <Column floated='left' verticalAlign='middle'>
                      <List horizontal divided inverted link verticalAlign='middle' floated='left'>
                        <List.Item style={{ color: "white"}}>
                          0812345678
                        </List.Item>
                        <List.Item>
                          <Icon link name='facebook f' inverted></Icon>
                        </List.Item>
                      </List>
                    </Column>
                    <Column floated='right' textAlign='right'>
                      <List horizontal divided inverted link verticalAlign='middle' floated='right'>
                        <List.Item as='a' href='#' active>EN</List.Item>
                        <List.Item as='a' href='#'>TH</List.Item>
                      </List>
                    </Column>
                  </Row>
                </Grid>
              </Container>
            </Row>
            <Row style={gridRowMenuStyle}>
              <Container>
                <Menu pointing secondary borderless stackable size='huge' style={menuStyle}>
                  <Menu.Item header>
                    <Image size='mini' src='/static/images/menu/logo.png' style={{ marginRight: '1.5em' }} />
                  </Menu.Item>
                  <Menu.Item name={HOME} active={activeMenuItem === HOME} onClick={this.handleMenuItemClick} />
                  <Menu.Item name={PACKAGE} active={activeMenuItem === PACKAGE} onClick={this.handleMenuItemClick} />
                  <Menu.Item name={BLOG} active={activeMenuItem === BLOG} onClick={this.handleMenuItemClick} />
                  <Menu.Item name={ABOUTUS} active={activeMenuItem === ABOUTUS} onClick={this.handleMenuItemClick} />
                  <Menu.Item name={FAQ} active={activeMenuItem === FAQ} onClick={this.handleMenuItemClick} />
                  <Menu.Menu position='right'>
                    <Button size='large' style={loginStyle} content='Log In'/>
                  </Menu.Menu>
                </Menu>
              </Container>
            </Row>
          </Grid>
          
      )
    }
  }

export default MenuDefault
