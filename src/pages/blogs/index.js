import React from 'react';
import MenuDefault from '../../main/menu/index';
import FooterDefault from '../../main/footer/footer';
import BlogsComponent from '../../main/blogs';

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
