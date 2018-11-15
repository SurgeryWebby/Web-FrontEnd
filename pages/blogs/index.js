import React from 'react';
import MenuDefault from '../../components/menu/menu';
import FooterDefault from '../../components/footer/footer';
import BlogsComponent from '../../components/blogs';

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
