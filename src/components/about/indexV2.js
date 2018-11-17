import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container, Header, Image, Grid, Segment,
} from 'semantic-ui-react';
import Banner from '../common/banner/Banner';

const { Column, Row } = Grid;

const contentContainerStyle = {
    background: 'url("/static/images/about/service-background.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top',
    backgroundSize: 'cover',
};

const containerStyle = {
    marginBottom: '40px',
};

const WhyUsContentStyle = {
    fontFamily: 'Chonburi',
    fontSize: 24,
};

const ContentHeader = () => (
    <Header style={{ fontFamily: 'Chonburi', fontSize: 32 }}>หน้าวีสวยอย่างเป็นธรรมชาติ</Header>
);

const WhyUsHeader = () => (
    <Header style={{ fontFamily: 'ButlerRegular', fontSize: 48 }}>Why Us ?</Header>
);

const AboutUs = () => (
    <Grid>
        <Row>
            <Container fluid>
                <Banner
                    title="About us"
                    imagePath="/static/images/about/banner-background.png"
                />
            </Container>
        </Row>
        <Row style={contentContainerStyle}>
            <Grid>
                <Row>
                    <Container>
                        <Segment basic>
                            <Image src="/static/images/about/video.png" centered />
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign="center">
                        <Segment basic>
                            <ContentHeader />
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์
                            และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็ม Microfat คือการนำไขมัน
ของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย
                            Microfat คือการนำไขมัน
ของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat
                            คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมัน
                        </Segment>
                        <Segment basic>
                            Microfat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์ และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat
                            คือการนำไขมันของตนเองมาผสมกับสเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็มสัดส่วนต่างๆในร่างกาย
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า
                            หรือเติมเต็มสัดส่วนต่างๆในร่างกาย Microfat คือการนำไขมันMicrofat คือ การนำไขมันของตนเองมาผสมกับสเต็มเซลล์
                            และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้าหรือเติมเต็มสัดส่วนต่างๆในร่างกาย
                            Microfat คือการนำไขมันของตนเองมาผสมกับ สเต็มเซลล์และฉีดเติมเต็มกลับเข้าไปสู่บริเวณใบหน้า หรือเติมเต็ม Microfat คือการนำไขมัน
                        </Segment>
                    </Container>
                </Row>
                <Row>
                    <Container textAlign="center" style={containerStyle}>
                        <Segment basic>
                            <WhyUsHeader />
                        </Segment>
                        <Grid column={3} columns="equal" stackable>
                            <Row>
                                <Column>
                                    <Container>
                                        <Image centered circular src="/static/images/about/whyus2.png" size="small" />
                                    </Container>
                                    <Segment basic>
                                        <Header style={WhyUsContentStyle}>แพทย์มือหนึ่งเชี่ยวชาญ เชื่อถือได้</Header>
                                    </Segment>
                                </Column>
                                <Column>
                                    <Container>
                                        <Image centered circular src="/static/images/about/whyus2.png" size="small" />
                                    </Container>
                                    <Segment basic>
                                        <Header style={WhyUsContentStyle}>รับประกันความปลอดภัยจากคลีนิคชั้นนำ</Header>
                                    </Segment>
                                </Column>
                                <Column>
                                    <Container>
                                        <Image centered circular src="/static/images/about/whyus2.png" size="small" />
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
);

export default AboutUs;
