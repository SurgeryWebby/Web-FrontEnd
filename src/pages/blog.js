import React from 'react';
import MenuDefault from '../components/menu/menu';
import FooterDefault from '../components/footer/footer';
import BlogComponent from '../components/blogs/blog';

export default () => (
    <div>
        <style>
          @import url(`https://fonts.googleapis.com/css?family=Chonburi|Prompt`);
        </style>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/butler" type="text/css" />
        <MenuDefault activeItem="Blog" />
        <BlogComponent />
        <FooterDefault />
    </div>
);
