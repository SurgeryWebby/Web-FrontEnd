import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
    Container, Segment, Grid,
} from 'semantic-ui-react';
import MessengerMessageUs from 'react-messenger-message-us';
import FaqsAccordions from './FaqsAccordions';
import Banner from '../common/Banner';
import './index.css';

const { Row } = Grid;

const topRowStyle = {
    paddingTop: 0,
};

const FaqsComponent = () => (
    <Grid>
        <Row>
            <Container fluid>
                <Banner
                    title="FAQs"
                    imagePath="/static/images/about/banner-background.png"
                />
            </Container>
        </Row>
        <Row style={topRowStyle}>
            <Container fluid className="faqs-content">
                <Container>
                    <Segment vertical style={{ borderBottom: 0 }}>
                        <FaqsAccordions />
                    </Segment>

                    <Segment textAlign="center" vertical style={{ borderBottom: 0 }}>
                        <p>หากไม่พบคำถามที่คุณสงสัย สามารถสอบถามเพิ่มเติมได้ทาง</p>
                    </Segment>

                    <Segment textAlign="center" vertical style={{ borderBottom: 0 }}>
                        <MessengerMessageUs pageId="334368506922347" appId="1371080042903307" />
                    </Segment>

                    <Segment textAlign="center" vertical style={{ borderBottom: 0 }}>
                        <p>หรือโทร 02-123-4567</p>
                    </Segment>
                </Container>
            </Container>
        </Row>
    </Grid>
);

export default FaqsComponent;
