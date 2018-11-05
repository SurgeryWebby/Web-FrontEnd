import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid, Rail, Segment } from 'semantic-ui-react'
import MenuDefault from '../components/menu/menu.js'

const { Column, Row } = Grid

// TODO Move to css maybe or styled components
const containerStyle = {
    marginBottom: "40px",
}

const gridStyle = {
    marginTop: "10px"
}

const contentContainerStyle = {
    background: 'url("/static/images/about/service-background.png")',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top",
    backgroundSize: "cover"
}

const AboutUs = () => (
    <Grid>
        <Row>
            <Container fluid>
                <Image src='/static/images/about/banner-background.png' fluid></Image>
            </Container>
        </Row>
        <Row style={contentContainerStyle}>
            <Grid>
                <Row>
                    <Container fluid>
                        <Image src='/static/images/about/video.png' centered/>
                    </Container>
                </Row>
                <Row>
                    <Container fluid text textAlign='center'>
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
                                    <Card centered>
                                        <Image src='/static/images/about/whyus.png' size='medium' circular/>
                                        <Card.Content>
                                            <Card.Header>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Card.Header>
                                        </Card.Content>
                                    </Card>
                                </Column>
                                <Column>
                                    <Card centered>
                                        <Image src='/static/images/about/whyus.png' circular/>
                                        <Card.Content>
                                            <Card.Header>รับประกันความปลอดภัยจากคลีนิคชั้นนำ</Card.Header>
                                        </Card.Content>
                                    </Card>
                                </Column>
                                <Column>
                                    <Card centered>
                                        <Image src='/static/images/about/whyus.png' circular/>
                                        <Card.Content>
                                            <Card.Header>ยินดีให้คำปรึกษาทุกข้อกังวลใจ</Card.Header>
                                        </Card.Content>
                                    </Card>
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