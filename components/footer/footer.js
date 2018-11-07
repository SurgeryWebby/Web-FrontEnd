import React, { Component } from 'react'
import { Menu, Segment, Container, Grid, Button, Icon, Label, Image, Responsive, List, Divider } from 'semantic-ui-react'

const { Column, Row } = Grid

const HOME = 'Home'
const PACKAGE = 'Package'
const BLOG = 'Blog'
const ABOUTUS = 'About Us'
const FAQ = 'FAQ'

const gridStyle = {
    backgroundColor: "#857664",
}

const rowStyle = {
  paddingTop: "0px",
  paddingBottom: "0px"
}

const textStyle = {
  color: "white"
}

class FooterDefault extends Component {
    state = { activeItem: HOME }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
          <Grid stackable style={gridStyle} textAlign='center'>
            <Row style={rowStyle}>
              <Column width={3} verticalAlign='middle'>
                <Segment basic>
                  <Image size='mini' src='/static/images/menu/logo.png' style={{ marginRight: '1.5em' }} />
                  <Container style={textStyle}>© Copyright 2018 ---, All Rights Reserved.</Container>
                </Segment>
              </Column>
              <Column width={6} verticalAlign='middle' only='large screen'>
                <Container textAlign='center'>
                  <Menu text compact size='huge'>
                    <Menu.Item name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} style={textStyle}/>
                    <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} style={textStyle}/>
                    <Menu.Item name={BLOG} active={activeItem === BLOG} onClick={this.handleItemClick} style={textStyle}/>
                    <Menu.Item name={ABOUTUS} active={activeItem === ABOUTUS} onClick={this.handleItemClick} style={textStyle}/>
                    <Menu.Item name={FAQ} active={activeItem === FAQ} onClick={this.handleItemClick} style={textStyle}/>
                  </Menu>
                </Container>
              </Column>
              <Column width={3} verticalAlign='middle'>
                  <Container>
                    <List horizontal divided inverted link>
                      <List.Item style={{ color: "white"}}>
                        0812345678
                      </List.Item>
                      <List.Item>
                        <Icon link name='facebook f' inverted></Icon>
                      </List.Item>
                    </List>
                  </Container>
              </Column>
            </Row>
          </Grid>
      )
    }
  }

export default FooterDefault
