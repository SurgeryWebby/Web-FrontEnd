import MenuDefault from '../components/menu/menu.js';
import FooterDefault from '../components/footer/footer.js';
import AboutComponent from '../components/about';

export default () => <div>
    <style>
      @import url('https://fonts.googleapis.com/css?family=Chonburi|Prompt');
    </style>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/butler" type="text/css"/>
    <MenuDefault activeItem='About Us'/>
    <AboutComponent />
    <FooterDefault/>
</div>;
