import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Image, Grid, Segment, Rail, Button } from 'semantic-ui-react'
import WavyBannerSvg from '../Base/WavyBannerSvg.js'
import TopWavySvg from '../Base/TopWavySvg.js'

const { Column, Row } = Grid
const { Group } = Card

const serviceContainerStyle = {
    background: 'url("/static/images/home/service-background.png")',
    backgroundSize: "cover",
}

const promotionBlogContainerStyle = {
    background: 'url("/static/images/home/promotion-blog-background.png")',
    backgroundSize: "cover",
    backgroundPosition: 'bottom',
    color: "white",
    padding: 0,
    paddingTop: 100,
    position: 'relative'
}

const gridStyle = {
    padding: 0
}

const serviceStyle = {
    backgroundImage: 'url("/static/images/home/service-content-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: 'cover'
}

const serviceGrid = {
    padding: 0
}

const seeMoreButtonStyle = {
    backgroundColor: "#C39D5C",
    color: "white"
}

const headerPromotionBlogStyle = {
    color: "white"
}

const headerTextOverlayContainerStyle = {
    padding: "60px 120px 60px 120px"
}

const headerTextOverlayStyle = {
    backgroundImage: 'url("/static/images/home/banner-overlay-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "left",
    width: "700px",
    backgroundSize: "95%",
    bottom: "0px",
    position: "absolute"
}

const promotionHeaderImageStyle = {
    position: 'absolute',
    width: '30rem',
    top: '-3rem',
    left: '-10rem',
    zIndex: 0
}

const Home = () => (
    <Grid>
        <Row style={gridStyle}>
            <Image src='/static/images/home/banner-background.png' fluid ></Image>
            <Rail internal size='tiny' position='left' style={{ left: "5%", zIndex: "2" }}>
                <Grid>
                    <Column only='computer tablet' style={headerTextOverlayStyle}>
                        <Container textAlign='justified' style={headerTextOverlayContainerStyle}>
                            <Segment basic>
                                <Header size='huge'>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                                <p>Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน</p>
                            </Segment>
                            <Segment basic>
                                <Button content='See More' style={seeMoreButtonStyle}/>
                            </Segment>
                        </Container>
                    </Column>
                </Grid>
            </Rail>
            <WavyBannerSvg/>
        </Row>
        <Row style={serviceContainerStyle} centered>
            <Container>
                <Grid centered style={{padding: 0}}>
                    <Row centered>
                        <Container>
                            <Header size='huge'>Service</Header>
                        </Container>
                    </Row>
                    <Row>
                        <Container style={serviceStyle} textAlign='center'>
                            <Grid container columns={3} doubling stackable>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                                <Column style={serviceGrid}><Image src='/static/images/home/service-content-element.png' centered/></Column>
                            </Grid>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                        <Button content='See More' style={seeMoreButtonStyle}/>
                        </Container>
                    </Row>
                </Grid>
            </Container>
        </Row>
        <Grid style={promotionBlogContainerStyle}>
            <TopWavySvg className="banner-wave" />
            <Row style={{position: 'relative'}}>
                <Container>
                    <Grid stackable centered columns='equal'>
                        <Row>
                            <Column>
                                <Container>
                                    <Segment basic>
                                        <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                    </Segment>
                                </Container>
                            </Column>
                            <Column>
                                <Container>
                                    <Segment basic style={{ position: 'relative' }}>
                                        <Header style={{zIndex: 1, position: 'relative', fontSize: 50}}>Promotion</Header>
                                        <Image style={promotionHeaderImageStyle} src='/static/images/home/promotion-header-overlay-background.png' size='big' centered/>
                                    </Segment>
                                </Container>
                                <Container>
                                    <Segment basic style={{paddingTop: 20}}>
                                        <Header size='large' style={headerPromotionBlogStyle}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                                        <p>Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ</p>
                                    </Segment>
                                </Container>
                                <Container>
                                    <Segment basic>
                                        <Button content='See More' style={seeMoreButtonStyle}/>
                                    </Segment>
                                </Container>

                            </Column>
                        </Row>
                    </Grid>
                </Container>
            </Row>
            <Row>
                <Container>
                    <Grid stackable centered columns='equal'>
                        <Container>
                            <Header style={headerPromotionBlogStyle} size='huge'>Blog</Header>
                        </Container>
                        <Row>
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container>
                                    <Segment basic>
                                        <Header style={headerPromotionBlogStyle} size='large'>สร้างกรอบหน้าให้ได้รูป สวยสมใจ</Header>
                                        <p>
                                        Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                        </p>
                                    </Segment>
                                </Container>
                            </Column>
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container>
                                    <Segment basic>
                                        <Header style={headerPromotionBlogStyle} size='large'>สร้างกรอบหน้าให้ได้รูป สวยสมใจ</Header>
                                        <p>
                                        Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                        </p>
                                    </Segment>
                                </Container>
                            </Column>
                            <Column>
                                <Container >
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container>
                                    <Segment basic>
                                        <Header style={headerPromotionBlogStyle} size='large'>สร้างกรอบหน้าให้ได้รูป สวยสมใจ</Header>
                                        <p>
                                        Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ
                                        </p>
                                    </Segment>
                                </Container>
                            </Column>
                        </Row>
                        <Row>
                            <Button content='See More' style={seeMoreButtonStyle}/>
                        </Row>
                    </Grid>
                </Container>
            </Row>
        </Grid>
    </Grid>
)

export default Home
