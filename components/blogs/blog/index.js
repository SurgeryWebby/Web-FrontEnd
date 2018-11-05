import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Item, Segment, Label, Icon, Grid, Pagination } from 'semantic-ui-react';
import BlogContent from './BlogContent';
import BlogRightSideContent from './BlogRightSideContent';

const { Column, Row } = Grid;

const relatedBlogs = [
    {
        image: '/static/images/blog/Rectangle123.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    },
    {
        image: '/static/images/blog/Rectangle123.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    },
    {
        image: '/static/images/blog/Rectangle123.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    }
]

class BlogsComponent extends Component {
  render() {
    return <Container>
        <Grid clumn={2}>
            <Column mobile={16} computer={10}>
                <BlogContent />
            </Column>
            <Column mobile={16} computer={6}>
                <BlogRightSideContent />
            </Column>
        </Grid>
    </Container>
  }
}

export default BlogsComponent;
