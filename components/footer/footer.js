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
  fontFamily: 'ButlerRegular',
  fontSize: 18,
  marginLeft: 20,
  marginRight: 20,
  color: "white"
}

const LogoAndCopyRight = () => (
  <Segment basic>
    <Container><Image size='mini' src='/static/images/menu/logo.png' style={{ marginRight: '1.5em' }} /></Container>
    <Container style={{ color: 'white', fontFamily: 'ButlerRegular', fontSize: 10 }}>© Copyright 2018 ---, All Rights Reserved.</Container>
  </Segment>
)

const NumberAndFB = () => (
  <List horizontal divided inverted link style={{ fontFamily: 'ButlerRegular', fontSize: 14 }}>
    <List.Item style={{ color: "white" }}>
      081-2345678
    </List.Item>
    <List.Item>
      <Icon link name='facebook f' inverted></Icon>
    </List.Item>
  </List>
)

class FooterDefault extends Component {
  state = { activeItem: HOME }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Grid stackable style={gridStyle} textAlign='center'>
        <Row style={rowStyle}>
          <Column width={3} verticalAlign='middle'>
            <LogoAndCopyRight />
          </Column>
          <Column width={6} verticalAlign='middle' only='large screen'>
            <Container textAlign='center'>
              <Menu text compact size='huge'>
                <Menu.Item name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} style={textStyle} />
                <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} style={textStyle} />
                <Menu.Item name={BLOG} active={activeItem === BLOG} onClick={this.handleItemClick} style={textStyle} />
                <Menu.Item name={ABOUTUS} active={activeItem === ABOUTUS} onClick={this.handleItemClick} style={textStyle} />
                <Menu.Item name={FAQ} active={activeItem === FAQ} onClick={this.handleItemClick} style={textStyle} />
              </Menu>
            </Container>
          </Column>
          <Column width={3} verticalAlign='middle'>
            <Container>
              <NumberAndFB />
            </Container>
          </Column>
        </Row>
      </Grid>
    )
  }
}

export default FooterDefault
