import React, { Component } from 'react'
import { Link } from 'next/link';
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
  paddingTop: 0,
  paddingBottom: 0
}
const menuStyle = {
  borderColor: "white",
  marginTop: "0px",
  fontFamily: 'ButlerRegular',
  fontSize: 18
}
const loginStyle = {
  backgroundColor: "#C39D5C",
  marginTop: "10px",
  marginBottom: "0px",
  color: "white",
  fontFamily: 'ButlerRegular',
  fontSize: 16
}

const TopMenuContentStyle = {
  fontFamily: 'ButlerRegular',
  fontSize: 14,
}

const NumberAndFB = () => (
  <List horizontal divided inverted link verticalAlign='middle' floated='left' style={TopMenuContentStyle}>
    <List.Item style={{ color: "white"}}>
      081-2345678
    </List.Item>
    <List.Item>
      <Icon link name='facebook f' inverted></Icon>
    </List.Item>
  </List>
)

const Language = () => (
  <List horizontal divided inverted link verticalAlign='middle' floated='right' style={TopMenuContentStyle}>
    <List.Item as='a' href='#' active>EN</List.Item>
    <List.Item as='a' href='#'>TH</List.Item>
  </List>
)

const LogInMenu = () => (
  <Menu.Menu position='right'>
    <Segment basic style={{ paddingRight: 0, paddingTop: 0}}>
      <Button size='large' style={loginStyle} content='Log In'/>
    </Segment>
    
  </Menu.Menu>
)

class MenuDefault extends Component {
  state = { 
    activeItem: HOME,
    activeLanguage: EN
  }

  componentWillMount() {
    const { activeItem } = this.props;
    this.setState({activeItem})
  }

  handleItemClick = (e, { name }) => {}

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Row only='computer tablet' style={topMenuStyle}>
          <Container>
            <Grid columns='equal' style={ColumnTopMenu} >
              <Row verticalAlign='middle'>
                <Column floated='left' verticalAlign='middle'>
                  <NumberAndFB/>
                </Column>
                <Column floated='right' textAlign='right'>
                  <Language/>
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
              <Menu.Item as={Link} href="/" name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} />
              <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} />
              <Menu.Item as={Link} href="/blogs" name={BLOG} active={activeItem === BLOG} onClick={this.handleItemClick} />
              <Menu.Item as={Link} href="/about" name={ABOUTUS} active={activeItem === ABOUTUS} onClick={this.handleItemClick} />
              <Menu.Item as={Link} href="/faqs" name={FAQ} active={activeItem === FAQ} onClick={this.handleItemClick} />
              <LogInMenu/>
            </Menu>
          </Container>
        </Row>
      </Grid>
    )
  }
}

export default MenuDefault
