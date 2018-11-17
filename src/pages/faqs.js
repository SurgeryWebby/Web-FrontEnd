import React from 'react';
import MenuDefault from '../main/menu/menu';
import FooterDefault from '../main/footer/footer';
import FaqComponent from '../main/faqs';

export default () => (
    <div>
        <style>
          @import url(`https://fonts.googleapis.com/css?family=Chonburi|Prompt`);
        </style>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/butler" type="text/css" />
        <MenuDefault activeItem="FAQ" />
        <FaqComponent />
        <FooterDefault />
    </div>
);