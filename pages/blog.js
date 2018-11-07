import MenuDefault from '../components/menu/menu.js'
import FooterDefault from '../components/footer/footer.js'
import BlogComponent from '../components/blogs/blog';

export default () => <div>
    <MenuDefault activeItem='Blog'/>
    <BlogComponent />
    <FooterDefault />
</div>
