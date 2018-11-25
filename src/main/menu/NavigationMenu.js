import React, { Component } from 'react';
import { Link } from 'next/link';
import {
    Container, Menu, Image,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import LogInMenu from './LogInMenu';

const HOME = 'Home';
const PACKAGE = 'Package';
const BLOG = 'Blog';
const ABOUTUS = 'About Us';
const FAQ = 'FAQ';

const menuStyle = {
    borderColor: 'white',
    marginTop: '0px',
    fontFamily: 'ButlerRegular',
    fontSize: 18,
};

class NavigationMenu extends Component {
    handleItemClick = () => {}

    render() {
        const { activeItem } = this.props;
        console.log('active item', activeItem);

        return (
            <Container>
                <Menu pointing secondary borderless stackable size="huge" style={menuStyle}>
                    <Menu.Item header>
                        <Image size="mini" src="/static/images/menu/logo.png" style={{ marginRight: '1.5em' }} />
                    </Menu.Item>
                    <Menu.Item as={Link} href="/" name={HOME} active={activeItem === HOME} onClick={this.handleItemClick} />
                    <Menu.Item name={PACKAGE} active={activeItem === PACKAGE} onClick={this.handleItemClick} />
                    <Menu.Item as={Link} href="/blogs" name={BLOG} active={activeItem === BLOG} onClick={this.handleItemClick} />
                    <Menu.Item
                        as={Link}
                        href="/about"
                        name={ABOUTUS}
                        active={activeItem === ABOUTUS}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item as={Link} href="/faqs" name={FAQ} active={activeItem === FAQ} onClick={this.handleItemClick} />
                    <LogInMenu />
                </Menu>
            </Container>
        );
    }
}

export default NavigationMenu;
