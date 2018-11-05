import React, { Component } from 'react';
import styled from 'styled-components';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Rail, Segment, Card, Icon, Grid, Pagination } from 'semantic-ui-react';
import BlogRightSideContent from './BlogRightSideContent';
import BlogList from './BlogList';
import Banner from '../Base/Banner';

const blogs = require('./mock/blogs');
const { Column, Row } = Grid;

class BlogsComponent extends Component {
  state = { activePage: 1 }

  handlePaginationChange = (e, { activePage }) => {
    console.log(e, activePage);
    this.setState({ activePage })
  }

  render() {
    console.log(blogs);
    const { activePage } = this.state;
    return <Container fluid>
      <Banner title="Blogs"/>
      <Container>
        <Grid clumn={2}>
            <Column mobile={16} computer={10}>
              <BlogList blogs={blogs}
                        activePage={activePage}
                        handlePaginationChange={this.handlePaginationChange}/>
            </Column>
            <Column mobile={16} computer={6}>
              <BlogRightSideContent />
            </Column>
        </Grid>
      </Container>
    </Container>
  }
}

export default BlogsComponent;
