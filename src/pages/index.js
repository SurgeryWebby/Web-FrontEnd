import React from 'react';
import MenuDefault from '../main/menu/menu';
import FooterDefault from '../main/footer/footer';
import Home from '../main/home/index';

const Index = () => (
    <div>
        <style>
            @import url(`https://fonts.googleapis.com/css?family=Chonburi|Prompt`);
        </style>
        <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/butler" type="text/css" />
        <MenuDefault activeItem="Home" />
        <Home />
        <FooterDefault />
    </div>
);

export default Index;
