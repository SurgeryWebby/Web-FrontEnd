import React from 'react';
import { Grid, Header, Label, Segment, Icon } from 'semantic-ui-react';
import RelatedBlogList from '../RealatedBlogList';
import './index.css';

const { Row, Column } = Grid;

const RelatedBlogHeaderStyle = {
    fontFamily: 'Chonburi',
    fontSize: 18
}

const TagsContentStyle = {
    fontFamily: 'Prompt',
    fontWeight: 0
}

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
                                    <Header style={RelatedBlogHeaderStyle}>บทความที่น่าสนใจ</Header>
                                    <RelatedBlogList blogs={relatedBlogs} />
                                </Segment>
                            </Column>
                            <Column>
                            <Segment vertical>
                                <Header style={RelatedBlogHeaderStyle}>Tags</Header>
                                <Label.Group style={TagsContentStyle}>
                                    <Label className="tag-label" as='a'>ศัลยกรรม</Label>
                                    <Label className="tag-label" as='a'>ศัลยกรรม</Label>
                                    <Label className="tag-label" as='a'>ศัลยกรรม</Label>
                                    <Label className="tag-label" as='a'>ศัลยกรรม</Label>
                                    <Label className="tag-label" as='a'>ศัลยกรรม</Label>
                                </Label.Group>
                                </Segment>
                            </Column>
                        </Row>
                    </Grid>