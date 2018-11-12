import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Image, Grid, Segment, Rail, Button } from 'semantic-ui-react'
import WavyBannerSvg from '../common/banner/WavyBannerSvg.js'
import TopWavySvg from '../common/banner/TopWavySvg.js'
import ServiceComponent from './service/ServiceComponent';
import './index.css'

const { Column, Row } = Grid

const serviceContainerStyle = {
    background: 'url("/static/images/home/service-background.png")',
    backgroundSize: "cover",
    marginTop: 80
}

const promotionBlogContainerStyle = {
    background: 'url("/static/images/home/promotion-blog-background.png")',
    backgroundSize: "cover",
    backgroundPosition: 'bottom',
    color: "white",
    padding: 0,
    paddingTop: 100,
    position: 'relative',
    marginTop: 0
}

const gridStyle = {
    padding: 0,
    position: 'relative'
}

const seeMoreButtonStyle = {
    backgroundColor: "#C39D5C",
    color: "white",
    fontFamily: "ButlerRegular",
    fontSize: 16
}

const headerPromotionBlogStyle = {
    color: "white",
    fontFamily: 'Chonburi'
}

const BannerHeaderContainerStyle = {
    padding: "60px 145px 60px 120px"
}

const BannerTextOverlayStyle = {
    backgroundImage: 'url("/static/images/home/banner-overlay-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "left",
    width: 800,
    backgroundSize: "90%",
    bottom: 0,
    position: "absolute"
}

const promotionHeaderImageStyle = {
    position: 'absolute',
    width: '35rem',
    top: '-4rem',
    left: '-10rem',
    zIndex: 0
}

const SeeMoreButton = () => (
    <Button size='large' content='See More' style={seeMoreButtonStyle} />
)

const BannerHeader = () => (
    <Header size='huge' style={{ fontFamily: 'Chonburi', fontSize: 32 }}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
)

const BannerContent = () => (
    <p className='home-banner-content'>Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน</p>
)

const ServiceHeader = () => (
    <Header style={{ fontFamily: 'ButlerRegular', fontSize: 64 }}>Service</Header>
)

const PromotionContent = () => (
    <p className='home-promotion-content'>
        Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และ
        ฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย
        Microfat คือการนำไขมันของตนเองมาผสมกับ
    </p>
)

const PromotionHeader = () => (
    <Header style={{zIndex: 1, position: 'relative', fontSize: 64, fontFamily: 'ButlerRegular'}}>Promotion</Header>
)  

const BlogContent = () => (
    <p className='home-blog-content'>
        Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วน ต่างๆในร่างกาย
        Microfat คือการนำไขมันของตนเองมาผสมกับ
    </p>
)

const BlogHeader = () => (
    <Header style={{ color: "white", fontFamily: 'Chonburi', fontSize: '18px'}}>สร้างกรอบหน้าให้ได้รูป สวยสมใจ</Header>
)
 
const Home = () => (
    <Grid>
        <Row style={gridStyle}>
            <Image src='/static/images/home/banner-background.png' fluid ></Image>
            <Rail internal size='tiny' position='left' style={{ left: "5%", zIndex: "2" }}>
                <Grid>
                    <Column style={BannerTextOverlayStyle}>
                        <Container textAlign='justified' style={BannerHeaderContainerStyle}>
                            <Segment basic>
                                <BannerHeader />
                                <BannerContent />
                            </Segment>
                            <Segment basic>
                                <Button content='See More' style={seeMoreButtonStyle}/>
                            </Segment>
                        </Container> 
                    </Column>
                </Grid>
            </Rail>
            <WavyBannerSvg />
        </Row>
        <Row style={serviceContainerStyle} centered>
            <Container>
                <Grid centered style={{padding: 0}}>
                    <Row centered>
                        <Container>  
                            <ServiceHeader/>
                        </Container>
                    </Row> 
                    <Row>
                        <ServiceComponent />
                    </Row>
                    <Row>
                        <Container style={{ marginTop: 50 }}>
                            <SeeMoreButton/>
                        </Container>
                    </Row> 
                </Grid>
            </Container>
        </Row>
        <Grid style={promotionBlogContainerStyle}>
            <TopWavySvg />
            <Row>
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
                                        <PromotionHeader/>
                                        <Image style={promotionHeaderImageStyle} src='/static/images/home/promotion-header-overlay-background.png' size='big' centered/>
                                    </Segment> 
                                </Container> 
                                <Container>
                                    <Segment basic style={{paddingTop: 20}}>
                                        <Header size='large' style={headerPromotionBlogStyle}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                                        <PromotionContent/>  
                                    </Segment>
                                </Container> 
                                <Container>
                                    <Segment basic>
                                        <SeeMoreButton/>
                                    </Segment>
                                </Container> 

                            </Column>
                        </Row>
                    </Grid>
                </Container>
            </Row>
            <Row style={{marginTop: "80px", marginBottom: "50px"}}>
                <Container>
                    <Grid  stackable centered columns='equal'> 
                        <Container>
                            <Header style={{ fontFamily: 'ButlerRegular', color: 'white', fontSize: '48px'}} size='huge'>Blog</Header>
                        </Container>
                        <Row> 
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container> 
                                    <Segment basic>
                                        <BlogHeader/>
                                        <BlogContent/>
                                    </Segment> 
                                </Container> 
                            </Column>
                            <Column>
                                <Container>
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container> 
                                    <Segment basic>
                                        <BlogHeader/>
                                        <BlogContent/>
                                    </Segment> 
                                </Container> 
                            </Column>
                            <Column>
                                <Container >
                                    <Image src='/static/images/home/service-content-element.png' size='big' centered/>
                                </Container>
                                <Container> 
                                    <Segment basic>
                                        <BlogHeader/>
                                        <BlogContent/>
                                    </Segment> 
                                </Container> 
                            </Column>
                        </Row>
                        <Row>
                            <SeeMoreButton/>
                        </Row>
                    </Grid> 
                </Container>
            </Row>
        </Grid>
    </Grid>
)

export default Home
