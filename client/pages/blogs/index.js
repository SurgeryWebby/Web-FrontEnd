import React from 'react';
import MenuDefault from '../../src/main/menu/index';
import FooterDefault from '../../src/main/footer/footer';
import BlogsComponent from '../../src/main/blogs';

export default () => (
    <div>
        <style>
          @import url(`https://fonts.googleapis.com/css?family=Chonburi|Prompt`);
        </style>
        <MenuDefault activeItem="Blog" />
        <BlogsComponent />
        <FooterDefault />
    </div>
);
