import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'
import ServiceBackgroundImage from '../../static/home/service-background.png'

const serviceContainerStyle = {
    background: `url(${ServiceBackgroundImage})`
}

const Home = () => (
    <div>
        <MenuDefault />
        {/* Banner */}
        <Container fluid>
            <Image src='/static/home/banner.png' fluid/>
        </Container>
        <Grid>
            <Container style={serviceContainerStyle}>
                {/* Service Header */}
                {/* Service Body */}
                {/* See more */}
            </Container>
            <Container>
                {/* Promotion Picture */}
                {/* Promotion Header */}
                {/* Promotion Body */}
                {/* See more */}
            </Container>
            <Container>
                {/* Blog Header */}
                {/* Blog Body */}
                {/* See More */}
            </Container>
        </Grid>
        {/* Footer */}
    </div>
)

export default Home