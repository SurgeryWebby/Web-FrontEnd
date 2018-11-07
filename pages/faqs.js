import MenuDefault from '../components/menu/menu.js'
import FooterDefault from '../components/footer/footer.js'
import FaqComponent from '../components/faqs';

export default () => <div>
    <MenuDefault activeItem='FAQ'/>
    <FaqComponent />
    <FooterDefault/>
</div>;
