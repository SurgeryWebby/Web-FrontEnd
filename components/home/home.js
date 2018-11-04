import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Segment } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'
import FooterDefault from '../footer/footer.js'
import '../../css/index.css'


const Home = () => (
    <div>
        <MenuDefault />
        {/* Banner */}
        <Container fluid>
            <Image src='/static/home/banner2.png' fluid/>
        </Container>
        <Grid>
            <Container fluid >
                <Image src='/static/home/service-background.png'/>
                {/* Service Header */}
                {/* Service Body */}
                {/* See more */}
            </Container>
            <Container fluid>
                <Image src='/static/home/promotion-blog-background.png'/>
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
        <FooterDefault/>
    </div>
)

export default Home