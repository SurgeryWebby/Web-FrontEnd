import React from 'react';
import { Grid, Header, Label, Segment } from 'semantic-ui-react';
import RelatedBlogList from './RealatedBlogList';

const { Row, Column } = Grid;

const relatedBlogs = [
    {
        image: '/static/images/blog/relatedBlogs.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    },
    {
        image: '/static/images/blog/relatedBlogs.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    },
    {
        image: '/static/images/blog/relatedBlogs.png',
        title: 'สร้างกรอบหน้าให้ได้รูป สวยสมใจ'
    }
]

export default () => <Grid>
                        <Row columns={1}>
                            <Column>
                                <Segment vertical>
                                    <Header as="h2">บทความที่เกี่ยวข้อง</Header>
                                    <RelatedBlogList blogs={relatedBlogs} />
                                </Segment>
                            </Column>
                            <Column>
                            <Segment vertical>
                                <Header as="h2">Tags</Header>
                                    <Label as='a' tag>
                                        Upcoming
                                    </Label>
                                </Segment>
                            </Column>
                        </Row>
                    </Grid>