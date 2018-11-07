import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Rail, Segment } from 'semantic-ui-react'
import Banner from '../Base/Banner';

// TODO Move to css maybe or styled components
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

const railStyle = {
    left: "15%",
}

const containerStyle = {
    marginBottom: "40px",
}

const AboutUs = () => (
    <Grid>
        <Banner title="About us" />
        <Row style={contentContainerStyle}>
            <Grid>
                <Row>
                    <Container>
                        <Segment basic>
                            <Image src='/static/images/about/video.png' centered/>
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign='center'>
                        <Segment basic>
                            <Header size='huge'>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ 
                            และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat 
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็ม Microfat คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat 
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat 
                            คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า 
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันMicrofat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย 
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign='center' style={containerStyle}>
                        <Segment basic><Header size='huge'>Why us ?</Header></Segment>
                        <Grid column={3} columns='equal' stackable>
                            <Row>
                                <Column>
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header size='large'>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Header>
                                    </Segment>
                                </Column>
                                <Column>
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header size='large'>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Header>
                                    </Segment>
                                </Column>
                                <Column>
                                    <Container>
                                        <Image centered circular src='/static/images/about/whyus2.png' size='small'/>
                                    </Container>
                                    <Segment basic>
                                        <Header size='large'>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Header>
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