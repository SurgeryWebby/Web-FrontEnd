import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

const HOME = 'Home'
const PACKAGE = 'Package'
const BLOG = 'Blog'
const ABOUTUS = 'About Us'
const FAQ = 'FAQ'

class MenuDefault extends Component {
    state = { activeItem: 'home' }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <div>
          <Menu pointing secondary>
            <Menu.Item name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} />
            <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} />
            <Menu.Item name='Blog' active={activeItem === 'Blog'} onClick={this.handleItemClick} />
            <Menu.Item name='About Us' active={activeItem === 'About Us'} onClick={this.handleItemClick} />
            <Menu.Item name='FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </div>
      )
    }
  }

export default MenuDefault
