import MenuDefault from '../components/menu/menu.js'
import FooterDefault from '../components/footer/footer.js'
import AboutComponent from '../components/about';

export default () => <div>
    <MenuDefault activeItem='About Us'/>
    <AboutComponent />
    <FooterDefault/>
</div>;
