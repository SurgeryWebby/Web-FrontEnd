import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'

const Home = () => (
    <div>
        <MenuDefault />
        {/* Banner */}
        <Container fluid>
            <Image src='/static/home/banner.png' fluid/>
        </Container>
        {/* Service */}
        {/* Container for promotion and blog */}
        {/* Promotion */}
        {/* Blog */}
    </div>
)

export default Home