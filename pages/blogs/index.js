import MenuDefault from '../../components/menu/menu.js'
import FooterDefault from '../../components/footer/footer.js'
import BlogsComponent from '../../components/blogs';

export default () => <div>
    <MenuDefault activeItem='Blog'/>
    <BlogsComponent />
    <FooterDefault/>
</div>