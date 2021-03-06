import React from 'react';
import { Grid, Segment, Pagination } from 'semantic-ui-react';
import BlogItem from './BlogItem';
import './index.css';

const { Column, Row } = Grid;

export default ({ blogs, activePage, handlePaginationChange }) => (
    <Segment vertical>
        <Grid doubling columns={2}>
            {
                blogs.slice((activePage - 1) * 6, activePage * 6).map(b => (
                    <Column key={b.id}>
                        <BlogItem blog={b} />
                    </Column>
                ))
            }
            <Row centered>
                <Pagination
                    className="surgery-pagination"
                    activePage={activePage}
                    firstItem={null}
                    lastItem={null}
                    nextItem={null}
                    prevItem={null}
                    onPageChange={handlePaginationChange}
                    totalPages={blogs.length / 6}
                />
            </Row>
        </Grid>
    </Segment>
);
