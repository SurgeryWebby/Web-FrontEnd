import React, { Component } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Rail, Button, Segment, Card, Icon, Grid, Pagination } from 'semantic-ui-react';
import MessengerMessageUs from 'react-messenger-message-us';
import FaqsAccordions from './FaqsAccordions';
import Banner from '../Base/Banner';
const { Column, Row } = Grid;
import './index.css';

const topRowStyle = {
    paddingTop: 0
}

class FaqsComponent extends Component {
  render() {
    return (
        <Grid>
            <Row style={topRowStyle}>
                <Container fluid className="faqs-content">
                    <Banner title="FAQs"/>
                    <Container>
                        <Segment vertical style={{borderBottom: 0}}>
                            <FaqsAccordions />
                        </Segment>

                        <Segment textAlign="center" vertical style={{borderBottom: 0}}>
                            <p>หากไม่พบคำถามที่คุณสงสัย สามารถสอบถามเพิ่มเติมได้ทาง</p>
                        </Segment>

                        <Segment textAlign="center" vertical style={{borderBottom: 0}}>
                            <MessengerMessageUs pageId="334368506922347" appId="1371080042903307" />
                        </Segment>

                        <Segment textAlign="center" vertical style={{borderBottom: 0}}>
                            <p>หรือโทร 02-123-4567</p>
                        </Segment>
                    </Container>
                </Container>
            </Row>
        </Grid>
    )
  }
}

export default FaqsComponent;
