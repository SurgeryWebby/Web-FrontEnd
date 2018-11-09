import React, { Component } from 'react';
import _ from 'lodash'
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Sticky } from 'semantic-ui-react';
import BlogRightSideContent from './BlogRightSideContent';
import BlogList from './BlogList';
import Banner from '../Base/Banner';

const blogs = require('./mock/blogs');
const { Column, Row } = Grid;

const TopRowStyle = {
  paddingTop: 0
}

class BlogsComponent extends Component {
  state = { activePage: 1 }

  handleContextRef = contextRef => this.setState({ contextRef })

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage })
  }

  render() {
    const { activePage, contextRef } = this.state;
    return (
      <Grid>
        <Row style={TopRowStyle}>
          <Container fluid>
            <Banner title="Blogs"/>
            <Container>
              <div ref={this.handleContextRef}>
                <Grid clumn={2}>
                    <Column mobile={16} computer={10}>
                      <BlogList blogs={blogs}
                                activePage={activePage}
                                handlePaginationChange={this.handlePaginationChange}/>
                    </Column>
                    <Column mobile={16} computer={6} >
                        <Sticky context={contextRef}>
                          <BlogRightSideContent />
                        </Sticky>
                    </Column>
                </Grid>
              </div>
            </Container>
        </Container>
        </Row>
      </Grid>
    )
  }
}

export default BlogsComponent;
