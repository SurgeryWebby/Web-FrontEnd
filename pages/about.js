import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Container, Header, Card, Icon, Image, Grid } from 'semantic-ui-react'
import MenuDefault from '../components/menu/menu.js'

const AboutUs = () => (
    <div>
        <MenuDefault />
        {/* Fucking navbar */}
        <Container fluid>
            <Image src='/static/about/header.png' fluid/>
        </Container>
        <Container fluid>
            <Image src='/static/about/video.png' centered/>
        </Container>
        <Container fluid text textAlign='center'>
            <Header>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
            <p>
            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันของ
ตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน
            </p>
            <p>
            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันของ
ตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันMicrofat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน
            </p>
        </Container>
        <Container textAlign='center'>
            <Header>Why us ?</Header>
            <Grid column={3} columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <Card centered>
                            <Image src='/static/about/whyus.png'/>
                            <Card.Content>
                                <Card.Header>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Image src='/static/about/whyus.png'/>
                            <Card.Content>
                                <Card.Header>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card centered>
                            <Image src='/static/about/whyus.png'/>
                            <Card.Content>
                                <Card.Header>แพทย์มือหนึ่ง เชี่ยวชาญ เชื่อถือได้</Card.Header>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
        </Container>
        {/* footer */}
        <Container>

        </Container>
    </div>
)

export default AboutUs