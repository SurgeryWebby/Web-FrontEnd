import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Segment, Rail, Button } from 'semantic-ui-react'
import MenuDefault from '../menu/menu.js'
import FooterDefault from '../footer/footer.js'

const { Column, Row } = Grid
const { Group } = Card

const serviceContainerStyle = {
    background: 'url("/static/images/home/service-background.png")',
    backgroundSize: "cover",
}

const promotionBlogContainerStyle = {
    background: 'url("/static/images/home/promotion-blog-background.png")',
    backgroundSize: "cover",
}

const gridStyle = {
    paddingBottom: "0px"
}

const headerTextOverlayStyle = {
    backgroundImage: 'url("/static/images/home/banner-overlay-background.png")',
    // backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',

    bottom: "10px",
    left: "100px",
    position: "absolute"
}

const serviceStyle = {
    backgroundImage: 'url("/static/images/home/service-content-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // minHeight: '100vh'
}

const serviceGrid = {
    padding: 0
}

const Home = () => (
    <Grid>
        <Row style={gridStyle}>
            <Container fluid>
                <Image src='/static/images/home/banner-background.png' fluid></Image>
                    <Rail internal size='massive' position='left'>
                        <Grid>
                            <Column style={headerTextOverlayStyle}>
                                <Container></Container>
                                <Header style={{ margin: "auto"}}>About Us</Header>
                            </Column>
                        </Grid>
                    </Rail>
            </Container>
        </Row>
        <Row style={serviceContainerStyle}>
            <Container>
                <Grid centered>
                    <Row>
                        <Container>
                            <Header>Service</Header>
                        </Container>
                    </Row>
                    <Row>
                        <Container style={serviceStyle}>
                            <Grid container columns={3} doubling stackable >
                                
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' /></Column>
                            </Grid>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <Button>See More</Button>
                        </Container>
                    </Row>
                </Grid>
            </Container>
        </Row>
        <Grid style={promotionBlogContainerStyle}>
            <Row >
                <Container>
                    <Grid stackable centered columns='equal'>
                        <Row>
                        <Column>
                            <Container>
                                <Image src='/static/images/home/service-content-element.png' size='big' centered/>    
                            </Container>
                        </Column>
                        <Column>
                            <Container>
                                <Header>Promotion</Header>
                                <p>
                                หน้าวีสวยอย่างเป็นธรรมชาติ
                                </p>
                                <p>
                                Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                </p>
                                <Button>See More</Button>
                            </Container>
                        </Column>
                        </Row> 
                    </Grid>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Grid stackable centered columns='equal'>
                    <Header>Blog</Header>
                        <Row>
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>    
                                </Container>
                                <Container textAlign='center'>
                                    <Header>Promotion</Header>
                                    <p>
                                    หน้าวีสวยอย่างเป็นธรรมชาติ
                                    </p>
                                    <p>
                                    Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                    </p>
                                </Container>
                            </Column>
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>    
                                </Container>
                                <Container textAlign='center'>
                                    <Header>Promotion</Header>
                                    <p>
                                    หน้าวีสวยอย่างเป็นธรรมชาติ
                                    </p>
                                    <p>
                                    Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                    </p>
                                </Container>
                            </Column>
                            <Column>
                                <Container >
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>    
                                </Container>
                                <Container textAlign='center'>
                                    <Header>Promotion</Header>
                                    <p>
                                    หน้าวีสวยอย่างเป็นธรรมชาติ
                                    </p>
                                    <p>
                                    Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                    </p>
                                </Container>
                            </Column>
                        </Row>
                        <Row>
                            <Button>See More</Button>
                        </Row>
                    </Grid>
                </Container>
            </Row>
        </Grid>
    </Grid>
)

export default Home