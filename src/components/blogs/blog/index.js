import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Sticky } from 'semantic-ui-react';
import BlogContent from './BlogContent';
import BlogRightSideContent from './BlogRightSideContent';

const { Column } = Grid;

class BlogsComponent extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state;
    return <Container>
        <div ref={this.handleContextRef}>
            <Grid column={2}>
                <Column mobile={16} computer={10}>
                    <BlogContent />
                </Column>
                <Column mobile={16} computer={6}>
                    <Sticky context={contextRef}>
                        <BlogRightSideContent />
                    </Sticky>
                </Column>
            </Grid>
        </div>
    </Container>
  }
}

export default BlogsComponent;
