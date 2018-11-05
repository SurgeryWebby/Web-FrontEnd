import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Rail, Segment } from 'semantic-ui-react'
import MenuDefault from '../components/menu/menu.js'

const { Column, Row } = Grid

// TODO Move to css maybe or styled components
const gridStyle = {
    paddingBottom: "0px"
}

const contentContainerStyle = {
    background: 'url("/static/images/about/service-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    backgroundSize: "cover"
}

const bannerSegmentStyle = {
    padding: "0px"
}

const headerTextOverlayStyle = {
    backgroundImage: 'url("/static/images/about/header-background.png")',
    backgroundSize: "cover",
    width: "300px",
    height: "100px",
    bottom: "10px",
    position: "absolute"
}

const containerStyle = {
    marginBottom: "40px",
}

const AboutUs = () => (
    <Grid>
        <Row style={gridStyle}>
            <Container fluid>
                <Image src='/static/images/about/banner-background.png' fluid></Image>
                    <Rail internal size='massive' position='left'>
                        <Grid>
                            <Row style={headerTextOverlayStyle}>
                                <Header style={{ margin: "auto"}}>About Us</Header>
                            </Row>
                        </Grid>
                    </Rail>
            </Container>
        </Row>
        <Row style={contentContainerStyle}>
            <Grid>
                <Row>
                    <Container>
                        <Image src='/static/images/about/video.png' centered/>
                    </Container>
                </Row>
                <Row>
                    <Container text textAlign='center'>
                        <Header>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                        <p>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ 
                            และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat 
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็ม Microfat คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat 
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน
                        </p>
                        <p>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat 
                            คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันMicrofat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน
                        </p>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign='center' style={containerStyle}>
                        <Header>Why us ?</Header>
                        <Grid column={3} columns='equal' stackable>
                            <Row>
                                <Column>
                                    <Container textAlign='center'>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                        <div>
                                        <p>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</p>
                                        </div>
                                    </Container>
                                </Column>
                                <Column>
                                    <Container textAlign='center'>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                        <div>
                                        <p>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</p>
                                        </div>
                                    </Container>
                                </Column>
                                <Column>
                                    <Container textAlign='center'>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                        <div>
                                        <p>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</p>
                                        </div>
                                    </Container>
                                </Column>
                            </Row>
                        </Grid>
                    </Container>
                </Row>
            </Grid>
        </Row>
    </Grid>
)

export default AboutUs