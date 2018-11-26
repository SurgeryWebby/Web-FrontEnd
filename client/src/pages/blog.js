import React from 'react';
import MenuDefault from '../main/menu/index';
import FooterDefault from '../main/footer/footer';
import BlogComponent from '../main/blogs/blog';

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
