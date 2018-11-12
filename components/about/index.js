import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Grid, Rail, Segment } from 'semantic-ui-react';
import WavyBannerSvg from '../common/banner/WavyBannerSvg.js';

// TODO Move to css maybe or styled components
const { Column, Row } = Grid

// TODO Move to css maybe or styled components
const gridStyle = {
    paddingTop: 0
}

const contentContainerStyle = {
    background: 'url("/static/images/about/service-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    backgroundSize: "cover"
}

const BannerHeaderContainerStyle = {
    padding: "40px 60px 30px 120px"
}

const headerTextOverlayStyle = {
    backgroundImage: 'url("/static/images/about/header-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "left",
    backgroundSize: "100%",
    height: 150,
    bottom: "5%",
    position: "absolute"
}

const railStyle = {
    left: "10%",
    zIndex: "2",
    width: 450
}

const containerStyle = {
    marginBottom: "40px",
}

const WhyUsContentStyle = {
    fontFamily: 'Chonburi',
    fontSize: 24
}

const BannerText = () => (
    <Header style={{ margin: "auto", fontFamily: 'ButlerRegular', fontSize: 48 }}>About Us</Header>
)

const ContentHeader = () => (
    <Header style={{ fontFamily: 'Chonburi', fontSize: 32 }}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
)

const WhyUsHeader = () => (
    <Header style={{ fontFamily: 'ButlerRegular', fontSize: 48 }}>Why Us ?</Header>
)

const AboutUs = () => (
    <Grid>
        <Row style={gridStyle}>
            <Image src='/static/images/about/banner-background.png' fluid></Image>
            <Rail internal size='tiny' position='left' style={railStyle}>
                <Grid>
                    <Column style={headerTextOverlayStyle} verticalAlign='middle' textAlign='center'>
                        <Container textAlign='justified' style={BannerHeaderContainerStyle}>
                            <Segment basic>
                                <BannerText />
                            </Segment>
                        </Container>
                    </Column>
                </Grid>
            </Rail>
            <WavyBannerSvg />
        </Row>
        <Row style={contentContainerStyle}>
            <Grid>
                <Row>
                    <Container>
                        <Segment basic>
                            <Image src='/static/images/about/video.png' centered />
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign='center'>
                        <Segment basic>
                            <ContentHeader />
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์
                            และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็ม Microfat คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเขาไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat 
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfatคือการนำไขมัน
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat 
                            คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนตางๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันMicrofat คือ กรนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign='center' style={containerStyle}>
                        <Segment basic>
                            <WhyUsHeader/>
                        </Segment>
                        <Grid column={3} columns='equal' stackable>
                            <Row>
                                <Column> 
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header style={WhyUsContentStyle}>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Header>
                                    </Segment> 
                                </Column>
                                <Column>
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header style={WhyUsContentStyle}>รับประกันความปลอดภัยจากคลีนิคชั้นนำ</Header>
                                    </Segment>
                                </Column> 
                                <Column>
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header style={WhyUsContentStyle}>ยินดีให้คำปรึกษาทุกข้อกังวลใจ</Header>
                                    </Segment>
                                </Column> 
                            </Row>
                        </Grid>
                    </Container>
                </Row>
            </Grid>
        </Row>
    </Grid>
)

export default AboutUs;