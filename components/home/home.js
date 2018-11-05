import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Segment } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'
import FooterDefault from '../footer/footer.js'

const { Column, Row } = Grid

const serviceContainerStyle = {
    background: 'url("/static/images/home/service-background.png")',
    backgroundSize: "cover",
    minHeight: "100vh"
}

const promotionBlogContainerStyle = {
    background: 'url("/static/images/home/promotion-blog-background.png")',
    backgroundSize: "cover",
    minHeight: "100vh"
}

const Home = () => (
    <Grid>
        <Row>
            <Container fluid>
                <Image src='/static/images/home/banner2.png' fluid/>
            </Container>
        </Row>
        <Row style={serviceContainerStyle}>
            <Container>
                {/* Service Header */}
                {/* Service Body */}
                {/* See more */}
            </Container>
        </Row>
        <Row style={promotionBlogContainerStyle}>
            <Grid>
                <Container>
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
        </Row>
    </Grid>
)

export default Home