import React, { Component } from 'react'
import { Menu, Segment, Container, Grid, Button, Divider, Icon, Label, Image, Responsive, GridRow, GridColumn } from 'semantic-ui-react'

const { Column, Row } = Grid

const HOME = 'Home'
const PACKAGE = 'Package'
const BLOG = 'Blog'
const ABOUTUS = 'About Us'
const FAQ = 'FAQ'

const gridStyle = {
    backgroundColor: "#857664",
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
            <Row>
              <Column width={3} verticalAlign='middle'>
                  <Container>
                    <Image size='mini' src='/static/images/menu/logo.png' style={{ marginRight: '1.5em' }} />
                  </Container>
                  <Container style={textStyle}>© Copyright 2018 ---, All Rights Reserved.</Container>
              </Column>
              <Column width={6} verticalAlign='middle'>
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
                    <font color='white'>0833109505</font>&nbsp;&nbsp;|&nbsp;<Icon link name='facebook f' inverted></Icon>
                  </Container>
              </Column>
            </Row>
          </Grid>
      )
    }
  }

export default FooterDefault
