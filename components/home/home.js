import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Segment } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'
import FooterDefault from '../footer/footer.js'
import FaqsAccordions from '../faqs/FaqsAccordions'
import MessengerMessageUs from 'react-messenger-message-us';

import './index.css'

const serviceContainerStyle = {
    background: 'url("/static/images/home/service-background.png")',
    backgroundRepeat: "repeat",
    backgroundOrigin: "padding-box",
    backgroundSize: "100%",
    /* background-position: bottom; */
    minHeight: "100vh"
}

const promotionBlogContainerStyle = {
    background: 'url("/static/images/home/promotion-blog-background.png")',
    backgroundRepeat: "repeat",
    backgroundOrigin: "padding-box",
    backgroundSize: "100%",
    /* background-position: bottom; */
    minHeight: "100vh"
}

const Home = () => (
    <div>
        <MenuDefault />
        {/* Banner */}
        <Container fluid>
            <Image src='/static/images/home/banner2.png' fluid/>
        </Container>
        <Grid>
            <Container fluid style={serviceContainerStyle}>
                {/* <Image src='/static/home/service-background.png'/> */}
                {/* Service Header */}
                {/* Service Body */}
                {/* See more */}
            </Container>
            <Container fluid style={promotionBlogContainerStyle}>
                {/* <Image src='/static/images/home/promotion-blog-background.png'/> */}
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